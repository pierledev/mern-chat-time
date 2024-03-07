import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { LoaderPage, SharedLayout } from "./components/shared";
import AuthHandler from "./pages/AuthHandler";

const Home = React.lazy(() => import("./pages/Home"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const ChatRoom = React.lazy(() => import("./pages/ChatRoom"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: (
          <AuthHandler redirectToChatRoomIfAuth>
            <Home />
          </AuthHandler>
        ),
      },
      {
        path: "sign-up",
        element: (
          <AuthHandler redirectToChatRoomIfAuth>
            <SignUp />
          </AuthHandler>
        ),
      },
      {
        path: "sign-in",
        element: (
          <AuthHandler redirectToChatRoomIfAuth>
            <SignIn />
          </AuthHandler>
        ),
      },
    ],
  },
  {
    path: "/chat-room",
    element: (
      <AuthHandler protectedRoute>
        <ChatRoom />
      </AuthHandler>
    ),
  },
]);

function App() {
  return (
    <>
      <Toaster />
      <Suspense fallback={<LoaderPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
