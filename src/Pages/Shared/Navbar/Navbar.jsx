import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logoImg from '../../../assets/img/logo.png'

const Navbar = () => {
    const navMenu = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/login'>LogIn</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    <li><NavLink to='/courses'>Courses</NavLink></li>
    <li><NavLink to='/add-courses'>Add Courses</NavLink></li>
    </>
  return (
    <nav className="bg-red-200">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <AiOutlineMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <img className="w-14" src={logoImg} alt="M" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
