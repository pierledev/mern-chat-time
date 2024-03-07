import { create } from "zustand";

const useUser = create((set) => ({
  selectedUser: null,
  setSelectedUser: (selectedUser) => set({ selectedUser }),
  messages: [],
  setMessages: (messages) => set({ messages }),
  filteredUsers: null,
  setFilteredUsers: (users) => set({ filteredUsers: users }),
}));

export default useUser;
