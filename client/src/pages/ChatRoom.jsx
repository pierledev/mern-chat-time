import { Logo } from "../components/shared";
import {
  ChatRoomContent,
  UsersList,
  UsersListSearch,
} from "../components/chatRoom";

const ChatRoom = () => {
  return (
    <main className="flex">
      <div className="drawer lg:drawer-open">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative grid grid-rows-[auto_1fr_auto] min-h-svh">
          {/* Page content here */}
          <ChatRoomContent />
        </div>
        <div className="drawer-side z-30">
          <label
            htmlFor="drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="min-h-full w-80 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="sticky top-0 z-30 grid gap-6 bg-base-200 p-4">
              <Logo />
              <UsersListSearch />
            </div>
            <UsersList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChatRoom;
