/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/SideBar"; // Import Sidebar component

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Guest Mode logic (toggle this as needed)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="bg-primary text-white p-4 shadow-md transition-all duration-300 ease-in-out">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg sm:text-2xl font-bold transform transition-all hover:scale-105">
            Bookify
          </h1>
          <nav className="hidden sm:flex space-x-4">
            <Link to="/" className="hover:text-primary-light transition duration-300 hover:underline text-base sm:text-lg transform hover:scale-105">Home</Link>
            <Link to="/about" className="hover:text-primary-light transition duration-300 hover:underline text-base sm:text-lg transform hover:scale-105">About</Link>
            <Link to="/contact" className="hover:text-primary-light transition duration-300 hover:underline text-base sm:text-lg transform hover:scale-105">Contact</Link>

            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="hover:text-primary-light transition duration-300 hover:underline text-base sm:text-lg">Dashboard</Link>
                <Link to="/profile" className="hover:text-primary-light transition duration-300 hover:underline text-base sm:text-lg">Profile</Link>
              </>
            ) : (
              <Link to="/login" className="hover:text-primary-light transition duration-300 hover:underline text-base sm:text-lg">Login</Link>
            )}
          </nav>
          {/* Hamburger Menu for Mobile */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden text-white">
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && <Sidebar isLoggedIn={isLoggedIn} />}

      {/* Main Content Area */}
      <main className="flex-grow bg-white transition-all duration-300">{children}</main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-4 text-center transition-all duration-300 hover:bg-gray-700">
        <div className="container mx-auto">© 2024 Bookify. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Layout;
