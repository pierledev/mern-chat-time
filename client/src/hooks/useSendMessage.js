import { useState } from "react";
import toast from "react-hot-toast";
import useUser from '../zustand/useUser';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedUser } = useUser();

  const sendMessage = async (message) => {
    setLoading(true);

    try {
      const response = await fetch(
        `/api/v1/messages/send/${selectedUser._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        },
      );
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setMessages([...messages, data.data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
