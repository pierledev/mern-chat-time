import UserSkeleton from "./UserSkeleton";

const UsersListSkeleton = () => {
  const arrayWithIndexes = Array.from({ length: 8 }, (_, index) => index);

  return (
    <ul className='grid'>
      {arrayWithIndexes.map((index) => (
        <UserSkeleton key={index} />
      ))}
    </ul>
  );
};

export default UsersListSkeleton;
