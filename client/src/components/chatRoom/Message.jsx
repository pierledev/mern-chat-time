import useUser from "../../zustand/useUser";
import { formatTime } from "../../utils/formatTime";
import { useAuthContext } from "../../context/AuthContext";

const Message = ({ message }) => {
  const { selectedUser } = useUser();
  const { authUser } = useAuthContext();

  const { _id, senderId, message: text, createdAt } = message;

  const fromMe = senderId !== selectedUser._id;
  const ava = fromMe ? authUser.ava : selectedUser?.ava;
  const name = fromMe
    ? `${authUser.firstName} ${authUser.lastName}`
    : `${selectedUser?.firstName} ${selectedUser.lastName}`;
  const messageBubblePosition = fromMe
    ? "chat-end justify-self-end"
    : "chat-start";
  const messageBubbleBg = fromMe ? "bg-sky-600 text-white" : "";
  const shakeClass = message.shouldShake ? 'shake' : '';

  const formattedTime = formatTime(createdAt);

  return (
    <div className={`chat ${messageBubblePosition}`}>
      <div className="avatar chat-image">
        <div className="w-8 rounded-full 2xl:w-10">
          <img alt={name} src={ava} />
        </div>
      </div>
      <div
        className={`chat flex w-full max-w-96 flex-col gap-1 ${messageBubblePosition} 2xl:max-w-lg`}
        key={_id}
      >
        <div className={`chat-bubble text-[15px] ${messageBubbleBg} ${shakeClass} 2xl:text-lg`}>
          {text}
        </div>
        <p className="text-xs 2xl:text-sm">{formattedTime}</p>
      </div>
    </div>
  );
};

export default Message;
