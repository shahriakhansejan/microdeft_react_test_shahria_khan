import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Authenticate/Register/Register";
import LogIn from "../Pages/Authenticate/LogIn/LogIn";
import Home from "../Pages/Home/Home";
import Root from "../provider/Root"
import Courses from "../Pages/Courses/Courses";
import AddCourses from "../Pages/AddCourses/AddCourses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/courses',
        element: <Courses></Courses>
      },
      {
        path: '/add-courses',
        element: <AddCourses></AddCourses>
      }
    ],
  },
]);

export default router;
