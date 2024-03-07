const UserSkeleton = () => {
  return (
    <div className="flex cursor-pointer items-center gap-3 border-b border-slate-700 p-3 first-of-type:rounded-t-xl last-of-type:rounded-b-xl last-of-type:border-b-0">
      <div className="relative">
        <div className="skeleton h-11 w-11 shrink-0 rounded-full" />
        <div className="badge badge-xs absolute bottom-0 right-0 bg-base-200"></div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="skeleton h-4 w-32 rounded-full font-medium text-white"></div>
        <div className="skeleton h-3 w-28 rounded-full text-sm"></div>
      </div>
    </div>
  );
};

export default UserSkeleton;
