import { useState } from "react";
import useConversation from "../../zustand/useUser";
import { TbHandClick } from "react-icons/tb";
import { LuSend } from "react-icons/lu";
import { useEffect } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import useGetMessages from "../../hooks/useGetMessages";
import { formatTime } from "../../utils/formatTime";

const ChatContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { loading, sendMessage } = useSendMessage();
  const { messages } = useGetMessages();

  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!message.length) return;

    await sendMessage(message);
    setMessage("");
  };

  useEffect(() => {
    // cleanup function (unmount component)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  if (!selectedConversation) {
    return (
      <div className="mb-20 mt-28 grid min-h-svh content-center justify-items-center gap-4 rounded-3xl border-2 border-gray-800 p-6 text-center">
        <span className="text-5xl">
          <TbHandClick />
        </span>
        <p className="text-xl font-medium">
          Start chatting by clicking other user&apos;s profile on the sidebar
        </p>
      </div>
    );
  }

  return (
    <div className="relative mb-20 mt-28 grid min-h-svh grid-rows-[auto_500px_auto] overflow-hidden rounded-3xl border-2 border-gray-800">
      <header className="flex items-center gap-3 border-b-2 border-gray-800 bg-sky-700 p-4">
        <img src={selectedConversation.ava} alt="" className="h-12 w-12" />
        <div>
          <p className="text-lg font-medium text-white">
            {selectedConversation.firstName} {selectedConversation.lastName}
          </p>
          <div className="flex items-center gap-1">
            <span className="badge badge-xs bg-sky-500"></span>
            <span>Online</span>
          </div>
        </div>
      </header>
      <div className="grid items-start gap-1 overflow-y-auto pb-24">
        {loading
          ? "Loading"
          : messages.map((singleMessage, index) => {
              const { senderId, message, createdAt } = singleMessage;

              return (
                <div
                  className={`chat flex w-full max-w-96 flex-col ${senderId === selectedConversation._id ? "chat-start" : "chat-end justify-self-end"}`}
                  key={index}
                >
                  <div
                    className={`chat-bubble ${senderId !== selectedConversation?._id ? "bg-sky-500 text-white" : ""}`}
                  >
                    {message}
                  </div>
                  <p>{formatTime(createdAt)}</p>
                </div>
              );
            })}
      </div>
      <footer className="absolute bottom-0 left-0 right-0">
        <form onSubmit={handleSendMessage}>
          <textarea
            name="message"
            placeholder="Write your message here..."
            className="w-full resize-none border-t-2 border-gray-800 bg-base-100 py-3 pl-5 pr-14 text-lg outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl"
          >
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              <LuSend />
            )}
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatContainer;
