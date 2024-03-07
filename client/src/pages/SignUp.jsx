import { Container } from "../components/shared";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

import GradientBg from "../assets/decoration-gradient.avif";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "female",
  });
  const { setAuthUser } = useAuthContext();

  const handleUserData = (e) =>
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, username, password, confirmPassword } =
      userData;

    if (firstName.trim().length < 2 || lastName.trim().length < 2) {
      return toast.error("Fist name and last name min 2 characters");
    }

    if (username.trim().length < 6) {
      return toast.error("Username min 6 characters");
    }

    if (password.length < 6) {
      return toast.error("Password min 6 characters");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    setLoading(true);

    try {
      const response = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data);

      if (!data.success) {
        throw new Error(data.message);
      }

      localStorage.setItem("chat-time-user", JSON.stringify(data.data));
      setAuthUser(data.data);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="grid lg:grid-cols-[1fr_1.5fr]">
        <div>
          <img src={GradientBg} alt="" className="h-48 w-full lg:min-h-full" />
        </div>
        <Container className="grid w-full max-w-md justify-items-center gap-10 md:max-w-md">
          <h1 className="pt-14 text-[38px] font-medium leading-[1.2] text-white md:text-6xl md:leading-[1.1] lg:pt-24 xl:pt-32">
            Sign Up
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid w-full gap-4 pb-20 xl:pb-24"
          >
            <label className="form-control w-full">
              <span className="label label-text text-base">First Name</span>
              <input
                name="firstName"
                type="text"
                placeholder="Your first name"
                className="input input-bordered w-full rounded-full"
                value={userData.firstName}
                onChange={handleUserData}
              />
            </label>
            <label className="form-control w-full">
              <span className="label label-text text-base">Last Name</span>
              <input
                name="lastName"
                type="text"
                placeholder="Your last name"
                className="input input-bordered w-full rounded-full"
                value={userData.lastName}
                onChange={handleUserData}
              />
            </label>
            <label className="form-control w-full">
              <span className="label label-text text-base">Username</span>
              <input
                name="username"
                type="text"
                placeholder="Your username"
                className="input input-bordered w-full rounded-full"
                value={userData.username}
                onChange={handleUserData}
              />
            </label>
            <div className="form-control">
              <p className="label label-text text-base">Gender</p>
              <div className="grid grid-cols-2 gap-4">
                <label className="label cursor-pointer justify-start gap-4">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="radio checked:bg-pink-500"
                    checked={userData.gender === "female"}
                    onChange={handleUserData}
                  />
                  <span className="label-text">Female</span>
                </label>
                <label className="label cursor-pointer justify-start gap-4">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="radio checked:bg-blue-500"
                    checked={userData.gender === "male"}
                    onChange={handleUserData}
                  />
                  <span className="label-text">Male</span>
                </label>
              </div>
            </div>
            <label className="form-control w-full">
              <span className="label label-text text-base">Password</span>
              <input
                name="password"
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full rounded-full"
                value={userData.password}
                onChange={handleUserData}
              />
            </label>
            <label className="form-control w-full">
              <span className="label label-text text-base">
                Confirm Password
              </span>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Repeast pasword"
                className="input input-bordered w-full rounded-full"
                value={userData.confirmPassword}
                onChange={handleUserData}
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

export default SignUp;
