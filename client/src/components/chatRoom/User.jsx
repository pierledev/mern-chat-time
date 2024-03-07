import { useSocketContext } from "../../context/SocketContext";
import useUser from "../../zustand/useUser";

const User = ({ user }) => {
  const { selectedUser, setSelectedUser } = useUser();
  const { onlineUsers } = useSocketContext();

  const isSelected = selectedUser?._id === user?._id;
  const isOnline = onlineUsers.includes(user?._id);

  return (
    <li
      className={`flex cursor-pointer items-center gap-3 border-b border-slate-800 p-3 last-of-type:border-b-0 hover:bg-gray-800 ${isSelected ? "bg-gray-800" : ""}`}
      onClick={() => setSelectedUser(user)}
    >
      <div className="relative">
        <img
          src={user?.ava}
          alt={`${user?.firstName} ${user?.lastName}`}
          className="h-11 w-11 shrink-0 rounded-full"
        />
        <div
          className={`badge badge-xs absolute bottom-0 right-0 ${isOnline ? "bg-sky-500" : "bg-gray-500"}`}
        ></div>
      </div>
      <div className="flex flex-col">
        <p className="font-medium text-white">
          {user?.firstName} {user?.lastName}
        </p>
        <p className="text-sm">@{user?.username}</p>
      </div>
    </li>
  );
};

export default User;
