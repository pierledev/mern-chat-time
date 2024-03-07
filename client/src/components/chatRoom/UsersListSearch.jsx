import { useEffect, useState } from "react";
import useUser from "../../zustand/useUser";
import useGetUsers from "../../hooks/useGetUsers";

const UsersListSearch = () => {
  const [search, setSearch] = useState("");
  const { setFilteredUsers } = useUser();
  const { users } = useGetUsers();

  useEffect(() => {
    // Handler to call after delay
    const handleSearch = () => {
      const filteredUsers = users?.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`;

        return fullName.toLowerCase().includes(search.toLowerCase());
      });

      setFilteredUsers(filteredUsers);
    };

    // Set timeout to delay the execution of the handleSearch function
    const timeoutId = setTimeout(() => {
      if (!search) {
        setFilteredUsers(null);
      } else {
        handleSearch();
      }
    }, 300); // 300 mss delay for debouncing

    // Cleanup function to clear the timeout if search changes again within the delay
    return () => clearTimeout(timeoutId);
  }, [search, users, setFilteredUsers]);

  return (
    <form>
      <label className="input input-bordered flex items-center gap-2 rounded-full border-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </form>
  );
};

export default UsersListSearch;
