import Message from '../models/Message.js';
import Conversation from '../models/Conversation.js';
import { StatusCodes } from 'http-status-codes';
import { getReceiverSocketId, io } from '../socket/socket.js';

export const getMessages = async (req, res) => {
  const { userId } = req.user;
  const { id: userToChatId } = req.params;

  const conversation = await Conversation.findOne({
    participants: { $all: [userId, userToChatId] },
  }).populate('messages');

  if (!conversation) {
    res
      .status(StatusCodes.OK)
      .json({ success: true, message: 'No messages yet', data: [] });
  }

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Retrieved conversation',
    data: conversation.messages,
  });
};

export const sendMessage = async (req, res) => {
  const { userId } = req.user;
  const { id: receiverId } = req.params;
  const { message } = req.body;

  let conversation = await Conversation.findOne({
    participants: { $all: [userId, receiverId] },
  });
  if (!conversation) {
    conversation = await Conversation.create({
      participants: [userId, receiverId],
    });
  }

  const newMessage = new Message({
    senderId: userId,
    receiverId,
    message,
  });

  conversation.messages.push(newMessage._id);

  await Promise.all([conversation.save(), newMessage.save()]);

  // Socket.io
  const receiverSocketId = getReceiverSocketId(receiverId);
  if (receiverSocketId) {
    // io.to(<socket_id>).omit() used to send events to specifc client
    io.to(receiverSocketId).emit('newMessage', newMessage);
  }

  res
    .status(StatusCodes.CREATED)
    .json({ success: true, message: 'Message sent', data: newMessage });
};
