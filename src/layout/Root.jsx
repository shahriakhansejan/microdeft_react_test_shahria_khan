import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  const location = useLocation();
  const hidePages =
    location.pathname.includes("/register") ||
    location.pathname.includes("/login");
  return (
    <div>
      {hidePages || <Navbar />}
      <Outlet />
      {hidePages || <Footer />}
    </div>
  );
};

export default Root;
