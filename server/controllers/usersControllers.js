import User from '../models/User.js';
import { NotFoundError } from '../errors/index.js';
import { StatusCodes } from 'http-status-codes';

export const getUsersToChat = async (req, res) => {
  const { userId } = req.user;
  const filteredUsers = await User.find({ _id: { $ne: userId } });

  res
    .status(StatusCodes.OK)
    .json({
      success: true,
      message: 'Retrieved all users except this logged in user',
      data: filteredUsers,
    });
};
