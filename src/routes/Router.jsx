import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Authenticate/Register/Register";
import LogIn from "../Pages/Authenticate/LogIn/LogIn";
import Courses from "../Pages/Courses/Courses";
import AddCourses from "../Pages/AddCourses/AddCourses";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/HomeElement/Home/Home";
import Root from "../layout/Root";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-courses",
        element: (
          <PrivateRoute>
            <AddCourses></AddCourses>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
