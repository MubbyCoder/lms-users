/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";


const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="bg-primary text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg sm:text-2xl font-bold">Bookify</h1>
          <nav className="hidden sm:flex space-x-4">
            <Link to="/" className="hover:text-primary-light text-base sm:text-lg">Home</Link>
            <Link to="/about" className="hover:text-primary-light text-base sm:text-lg">About</Link>
            <Link to="/contact" className="hover:text-primary-light text-base sm:text-lg">Contact</Link>
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="hover:text-primary-light text-base sm:text-lg">Dashboard</Link>
                <Link to="/profile" className="hover:text-primary-light text-base sm:text-lg">Profile</Link>
              </>
            ) : (
              <Link to="/login" className="hover:text-primary-light text-base sm:text-lg">Login</Link>
            )}
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex pt-16">
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main className="flex-grow ml-0 md:ml-64 bg-white transition-all duration-300">
          {children}
        </main>
      </div>
      <Footer/>
    </div>
  );
};


export default Layout;
