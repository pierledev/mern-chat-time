import { useEffect } from "react";
import { TopContent, MessagesContainer, BottomContent, Onboard } from ".";
import useUser from "../../zustand/useUser";

const ChatRoomContent = () => {
  const { selectedUser, setSelectedUser } = useUser();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedUser(null);
  }, [setSelectedUser]);

  return (
    <>
      <TopContent />
      {selectedUser ? <MessagesContainer /> : <Onboard />}
      {selectedUser && <BottomContent />}
    </>
  );
};

export default ChatRoomContent;
