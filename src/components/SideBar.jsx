import  { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaBookOpen,
  FaBlog,
  FaPhone,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import logo from "../assets/images/mainlogo.png"; // Adjust the path to your logo file

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/dashboard", name: "Dashboard", icon: <FaTachometerAlt /> },
    { path: "/home", name: "Books", icon: <FaBook /> },
    { path: "/borrowedbooks", name: "Borrowed Books", icon: <FaBookOpen /> },
    { path: "/blog", name: "Blogs", icon: <FaBlog /> },
    { path: "/contactus", name: "Contact Us", icon: <FaPhone /> },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-gray-100 bg-gray-800 p-2 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>

      {/* Full Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-800 text-gray-100 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 flex flex-col`}
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center py-6">
          <img
            src={logo}
            alt="BookWorm Logo"
            className={`w-12 h-12 ${isOpen ? "mb-2" : ""}`}
          />
          <h1
            className={`text-lg font-bold ${isOpen ? "mt-2" : "hidden"} lg:block`}
          >
            BookWorm <span className="text-gray-400 text-sm">Library</span>
          </h1>
        </div>

        <nav className="flex flex-col flex-grow mt-4">
          {navItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 rounded-lg hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <div className="text-xl">{item.icon}</div>
              <span
                className={`ml-4 text-lg ${
                  !isOpen && "hidden md:block"
                } transition-opacity duration-300`}
              >
                {item.name}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Logout Link */}
        <NavLink
          to="/login"
          className="flex items-center px-6 py-3 rounded-lg hover:bg-red-600 mt-auto"
        >
          <div className="text-xl">
            <FaSignOutAlt />
          </div>
          <span
            className={`ml-4 text-lg ${
              !isOpen && "hidden md:block"
            } transition-opacity duration-300`}
          >
            Log Out
          </span>
        </NavLink>
      </div>

      {/* Icon-Only Sidebar for Small Screens */}
      {!isOpen && (
        <div className="fixed top-0 left-0 h-screen w-16 bg-gray-800 text-gray-100 flex flex-col items-center shadow-lg md:hidden">
          {navItems.map((item, index) => (
            <div key={index} className="group flex flex-col items-center my-3">
              <NavLink
                to={item.path}
                className="text-xl p-3 hover:bg-gray-700 rounded-full"
              >
                {item.icon}
              </NavLink>
              <span className="text-sm text-gray-100 bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 mt-1 transition-opacity">
                {item.name}
              </span>
            </div>
          ))}
          {/* Logout Icon */}
          <div className="group flex flex-col items-center my-3 mt-auto">
            <NavLink
              to="/login"
              className="text-xl p-3 hover:bg-red-600 rounded-full"
            >
              <FaSignOutAlt />
            </NavLink>
            <span className="text-sm text-gray-100 bg-red-600 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 mt-1 transition-opacity">
              Log Out
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;