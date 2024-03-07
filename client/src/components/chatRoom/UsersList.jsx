import useGetUsers from "../../hooks/useGetUsers";
import { User, UsersListSkeleton } from ".";
import useUser from "../../zustand/useUser";

const UsersList = () => {
  const { loading, users } = useGetUsers();
  const { filteredUsers } = useUser();

  if (loading) {
    return (
      <ul className="grid overflow-y-auto">
        <UsersListSkeleton />
      </ul>
    );
  }

  if (filteredUsers?.length === 0) {
    return <p className='p-4 text-center text-red-500 font-medium text-lg'>User not found</p>;
  }

  if (filteredUsers?.length > 0) {
    return (
      <ul className="grid overflow-y-auto">
        {filteredUsers.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid overflow-y-auto">
      {users.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
