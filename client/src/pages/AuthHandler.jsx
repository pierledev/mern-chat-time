import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const AuthHandler = ({
  children,
  redirectToChatRoomIfAuth,
  protectedRoute,
}) => {
  const { authUser } = useAuthContext();
  const location = useLocation();

  // Redirect authenticated users to /chat-room if they are on a page that forces redirection
  if (authUser && redirectToChatRoomIfAuth) {
    return <Navigate to="/chat-room" replace />;
  }

  // Protect certain routes by redirecting unauthenticated users to the sign-in page
  if (!authUser && protectedRoute) {
    return <Navigate to="/sign-in" replace state={{ from: location }} />;
  }

  return children;
};

export default AuthHandler;
