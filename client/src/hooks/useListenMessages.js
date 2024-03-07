import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useUser from "../zustand/useUser";

import notificationSound from '../assets/tone/notification.mp3';

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useUser();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    // When this component unmounts, we don't really want to listen for this. This is something really necessary that we need to add. If we try to omit this clean up function, we can hear notification multiple times
    return () => socket.off("newMessage");
  }, [setMessages, socket, messages]);
};

export default useListenMessages;
