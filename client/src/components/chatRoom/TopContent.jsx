import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Logo } from "../shared";
import toast from "react-hot-toast";
import useUser from "../../zustand/useUser";

const TopContent = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const { selectedUser } = useUser();
  const [loading, setLoading] = useState(false);

  const { firstName, lastName, username, ava } = authUser;

  const handleSignOut = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/v1/auth/signout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      localStorage.removeItem("chat-time-user");
      setAuthUser(null);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sticky left-0 right-0 top-0 z-20 flex items-center justify-between bg-base-100 px-4 py-2 shadow-2xl">
      <div className="flex items-center gap-3">
        <label
          htmlFor="drawer"
          className="drawer-button cursor-pointer text-4xl lg:hidden"
        >
          <HiOutlineBars3 />
        </label>
        {selectedUser ? (
          <div className="flex items-center gap-3">
            <img
              src={selectedUser?.ava}
              alt={`${selectedUser?.firstName} ${selectedUser?.lastName}`}
              className="h-9 w-9 sm:h-11 sm:w-11"
            />
            <p className="font-medium text-white">
              <span>{selectedUser?.firstName}</span>{" "}
              <span className='hidden md:inline-block'>{selectedUser?.lastName}</span>
            </p>
          </div>
        ) : (
          <Logo className="text-xl sm:text-2xl lg:hidden" />
        )}
      </div>
      <div className="flex items-center gap-4">
        <p className="hidden items-center gap-2 sm:flex">
          <span className="font-medium text-white">
            {firstName} {lastName}
          </span>{" "}
          <span>@{username}</span>
        </p>
        <img
          src={ava}
          alt={`${firstName} ${lastName}`}
          className="h-9 w-9 sm:h-11 sm:w-11"
        />
        <button
          className="btn btn-md rounded-full border text-xl text-sky-700 hover:text-sky-500"
          onClick={handleSignOut}
        >
          {loading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            <RiLogoutCircleRLine />
          )}
        </button>
      </div>
    </div>
  );
};

export default TopContent;
