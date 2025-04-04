import { Link, NavLink } from "react-router-dom";
import AuthContext from "../providers/AuthContext";
import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      {user ? (
        <div className="flex gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Services</NavLink>

          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button">
              <Link className="flex items-center">
                Dashboard <IoIosArrowDown />
              </Link>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/add-service" className="justify-between">
                  Add Service
                </Link>
              </li>
              <li>
                <Link to="/manage-service">Manage Service</Link>
              </li>
              <li>
                <Link to="/booked-service">Booked Services</Link>
              </li>
              <li>
                <Link to="/service-to-do">Service To Do</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
        </div>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {!user && <Link to="/login">Login</Link>}
        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
