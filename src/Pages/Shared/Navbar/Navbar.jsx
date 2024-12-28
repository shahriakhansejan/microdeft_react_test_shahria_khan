import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logoImg from "../../../assets/img/logo.png";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navMenu = user ? (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/courses">Courses</NavLink>
      </li>
      <li>
        <NavLink to="/add-courses">Add-Courses</NavLink>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">LogIn</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-7xl bg-white mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            onClick={() => setIsOpen(!isOpen)}
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <AiOutlineMenu className="text-2xl" />
          </div>
          {isOpen && (
            <ul
              onClick={() => setIsOpen(false)}
              tabIndex={0}
              className="text-sm font-bold flex flex-col cinzel gap-2 dark1 activeNav dropdown-content bg-white z-50 mt-3 w-36 p-4 shadow"
            >
              {navMenu}
            </ul>
          )}
        </div>
        <img className="w-12" src={logoImg} alt="M" />
        <div className="hidden ml-12 lg:flex">
          <ul className="flex gap-6 font-bold dark1 activeNav cinzel">
            {navMenu}
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={() => logOut()}
            className="border rounded hover:text-white hover:bg-[#FF3811] text-xs font-bold border-[#FF3811] px-3 py-2 orange"
          >
            LogOut
          </button>
        ) : (
          <button className="border rounded text-white bg-[#FF3811] text-xs font-bold border-[#FF3811] px-3 py-2 hover:text-[#FF3811] hover:bg-white">
            LogIn
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
