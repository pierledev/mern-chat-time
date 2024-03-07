import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { Logo } from ".";
import { RiLogoutCircleRLine } from "react-icons/ri";
import toast from "react-hot-toast";

import Container from "./Container";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const location = useLocation();
  const pathname = location.pathname;

  const [ctaLink, setCtaLink] = useState("sign-in");

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

  useEffect(() => {
    if (pathname.includes("sign-in")) {
      setCtaLink("/sign-up");
    } else if (pathname.includes("chat-room")) {
      setCtaLink("/sign-out");
    } else {
      setCtaLink("/sign-in");
    }
  }, [pathname]);

  return (
    <header className="absolute left-0 right-0 top-0 z-10">
      <Container className="flex items-center justify-between">
        <Logo />
        {ctaLink === "/sign-out" ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <p>
                <span className="font-medium text-white">
                  {authUser?.firstName} {authUser?.lastName}
                </span>{" "}
                <span>(@{authUser?.username})</span>
              </p>
              <img
                src={authUser?.ava}
                alt={`${authUser?.firstName} ${authUser?.lastName}`}
                className="h-11 w-11"
              />
            </div>
            <button
              className="btn btn-md rounded-full border text-xl text-sky-400 hover:text-white"
              onClick={handleSignOut}
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                <RiLogoutCircleRLine />
              )}
            </button>
          </div>
        ) : (
          <Link
            to={ctaLink}
            className="btn btn-md rounded-full border-2 border-sky-500 text-lg text-sky-500 hover:border-sky-500 hover:bg-sky-500 hover:text-white"
          >
            {ctaLink === "/sign-in" ? "Sign In" : "Sign Up"}
          </Link>
        )}
      </Container>
    </header>
  );
};

export default Header;
