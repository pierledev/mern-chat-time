import { useState } from 'react';
import useSendMessage from "../../hooks/useSendMessage";
import { FiSend } from "react-icons/fi";

const BottomContent = () => {
  const [message, setMessage] = useState('');

  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!message.trim().length) return;

    await sendMessage(message);
    setMessage('');
  }

  return (
    <form onSubmit={handleSubmit} className="sticky bottom-0 left-0 right-0 z-10 grid w-full grid-cols-[1fr_auto] bg-base-200 p-4 shadow-inner">
      <input
        type="text"
        placeholder="Write your message here..."
        className="input input-bordered w-full"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit" className="pl-4 text-2xl">
        {loading ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          <FiSend />
        )}
      </button>
    </form>
  );
};

export default BottomContent;
