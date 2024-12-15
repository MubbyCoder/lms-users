/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaUsers,
  FaBlog,
  FaPhone,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../assets/images/bookcover.jpg"; // Adjust the path to your logo file

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { path: "/dashboard", name: "Dashboard", icon: <FaTachometerAlt /> },
    { path: "/books", name: "Books", icon: <FaBook /> },
    { path: "/users", name: "Users", icon: <FaUsers /> },
    { path: "/blog", name: "Blogs", icon: <FaBlog /> },
    { path: "/contactus", name: "Contact Us", icon: <FaPhone /> },
  ];

  return (
    <div
      className={`fixed  left-0 h-[90%] bg-gray-800 text-white shadow-lg transition-transform duration-300 z-40 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:w-64 w-64 flex flex-col`}
    >
      {/* Logo Section */}
      <div className="flex flex-col items-center py-6">
        <img src={logo} alt="BookWorm Logo" className="w-12 h-12 mb-2" />
        <h1 className="text-lg font-bold">
          BookWorm <span className="text-gray-400 text-sm">Library</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col flex-grow mt-4">
        {navItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            onClick={() => setIsMenuOpen(false)} // Close menu on click
            className={({ isActive }) =>
              `flex items-center px-6 py-3 rounded-lg hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <div className="text-xl">{item.icon}</div>
            <span className="ml-4 text-lg">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout Link */}
      <NavLink
        to="/login"
        onClick={() => setIsMenuOpen(false)}
        className="flex items-center px-6 py-3 rounded-lg hover:bg-red-600 mt-auto"
      >
        <div className="text-xl">
          <FaSignOutAlt />
        </div>
        <span className="ml-4 text-lg">Log Out</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
