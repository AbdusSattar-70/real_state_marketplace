import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Home from "./pages/home/home/Home";
import About from "./pages/about/About";
import Profile from "./pages/signup_login/Profile";
import SignIn from "./pages/signup_login/SignIn";
import SignUp from "./pages/signup_login/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
