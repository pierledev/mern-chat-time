import { useState } from "react";
import { Container } from "../components/shared";
import toast from "react-hot-toast";

import GradientBg from "../assets/decoration-gradient.avif";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const initialvalues = {username: '', password: ''};

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [userCredentials, setUserCredentials] = useState(initialvalues);

  const { setAuthUser } = useAuthContext();

  const navigate = useNavigate();

  const handleUserCredentials = (e) =>
    setUserCredentials((prevUserCredentials) => ({
      ...prevUserCredentials,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = userCredentials;

    if (!username.trim() || !password) {
      toast.error("Please fill out the form");
    }

    setLoading(true);

    try {
      const response = await fetch("/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      localStorage.setItem("chat-time-user", JSON.stringify(data.data));
      setAuthUser(data.data);
      toast.success(data.message);
      navigate('/chat-room');
      setUserCredentials(initialvalues)
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="grid lg:grid-cols-[1.5fr_1fr]">
        <div className="lg:order-2">
          <img src={GradientBg} alt="" className="h-48 w-full lg:min-h-full" />
        </div>
        <Container className="grid w-full max-w-md justify-items-center gap-10 lg:min-h-svh md:max-w-md content-center">
          <h1 className="pt-14 text-[38px] font-medium leading-[1.2] text-white md:text-6xl md:leading-[1.1] lg:pt-24 xl:pt-32">
            Sign In
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid w-full gap-4 pb-20 xl:pb-24 items-center content-center"
          >
            <label className="form-control w-full">
              <span className="label label-text text-base">Username</span>
              <input
                name="username"
                type="text"
                placeholder="Your username"
                value={userCredentials.username}
                onChange={handleUserCredentials}
                className="input input-bordered w-full rounded-full"
              />
            </label>
            <label className="form-control w-full">
              <span className="label label-text text-base">Password</span>
              <input
                name="password"
                type="password"
                placeholder="Your password"
                onChange={handleUserCredentials}
                className="input input-bordered w-full rounded-full"
              />
            </label>
            <button
              type="submit"
              className="btn mt-4 rounded-full bg-sky-700 text-lg text-white hover:bg-sky-500"
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </Container>
      </section>
    </main>
  );
};

export default SignIn;
