import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Root from "../layout/Root";
import NotFound from "../components/NotFound/NotFound";
import Home from "../pages/Home";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import Courses from "../pages/Courses";
import AddCourses from "../pages/AddCourses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <LogIn/>,
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <Courses/>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-courses",
        element: (
          <PrivateRoute>
            <AddCourses/>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
