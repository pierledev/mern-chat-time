import { useEffect, useRef } from "react";
import { Message } from ".";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

const MessagesContainer = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages(); // Listen for incoming messages from the socket

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="relative z-10 flex flex-col p-4 2xl:p-6">
      {loading && (
        <div className="flex justify-center">
          <span className="loading loading-dots loading-lg text-center"></span>
        </div>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {!loading && messages.length === 0 && (
        <p className="mt-2 text-center 2xl:text-lg 2xl:mt-4">
          Send a message to start a conversation
        </p>
      )}
    </div>
  );
};

export default MessagesContainer;
