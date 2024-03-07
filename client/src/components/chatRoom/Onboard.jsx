import { useAuthContext } from "../../context/AuthContext";

const Onboard = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="custom-height-onboard grid content-center items-center justify-items-center gap-3 p-4 text-center">
      <img src={authUser.ava} alt="" className="h-16 w-16" />
      <p className="text-3xl text-white">Welcome, {authUser.firstName}!</p>
      <p>Click any user on the sidebar to start chatting!</p>
    </div>
  );
};

export default Onboard;
