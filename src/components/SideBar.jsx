/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isLoggedIn }) => {
  return (
    <div className="fixed inset-0 bg-primary text-white p-4 space-y-4 transform transition-all duration-500 ease-in-out sm:hidden z-50 
    translate-x-[-100%] hover:translate-x-0 shadow-lg rounded-l-lg perspective-1000">
      <div className="space-y-4">
        <Link to="/" className="block transform transition duration-300 hover:scale-105 hover:text-primary-light">Home</Link>
        <Link to="/about" className="block transform transition duration-300 hover:scale-105 hover:text-primary-light">About</Link>
        <Link to="/contact" className="block transform transition duration-300 hover:scale-105 hover:text-primary-light">Contact</Link>

        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="block transform transition duration-300 hover:scale-105 hover:text-primary-light">Dashboard</Link>
            <Link to="/profile" className="block transform transition duration-300 hover:scale-105 hover:text-primary-light">Profile</Link>
          </>
        ) : (
          <Link to="/login" className="block transform transition duration-300 hover:scale-105 hover:text-primary-light">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
