import React, { useState } from "react";
import { XMarkIcon, Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { LogIn, UserPlus,Instagram, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("userToken"))
  );
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userDetails");
    setIsLoggedIn(false);
    setProfileMenuOpen(false);
    navigate("/login");
  };

  return (
    <>
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full p-5 flex justify-between items-center z-50 bg-white shadow-md">
        <div className="flex-shrink-0">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src="/bb-logo.png" alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Right-side Icons and Menu */}
        <div className="flex items-center space-x-5">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4 relative">
              {/* Notification Bell Icon */}
              <BellIcon className="w-6 h-6 text-black cursor-pointer" />

              {/* Profile Avatar */}
              <div
                className="relative cursor-pointer"
                onClick={toggleProfileMenu}
              >
                <img
                  src="/profile_icon.png" // Replace with user profile image if available
                  alt="Profile Avatar"
                  className="w-10 h-10 rounded-full border-2 border-gray-300"
                />
                {profileMenuOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ul className="py-2">
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => navigate("/profile")}
                      >
                        Profile
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-5">
              <div className="flex items-center text-black font-bold space-x-2 cursor-pointer font-poppins">
                <LogIn className="w-5 h-5" />
                <span>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-gray-700"
                  >
                    Login
                  </Link>
                </span>
              </div>
              <div className="flex items-center text-black font-bold space-x-2 cursor-pointer md:border-2 md:border-black md:px-4 md:py-2 md:rounded-lg font-poppins">
                <UserPlus className="w-5 h-5" />
                <span>
                  <Link
                    to="/join"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-gray-700"
                  >
                    Join as a Pro
                  </Link>
                </span>
              </div>
            </div>
          )}

          {/* Menu Icon */}
          <div
            className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer border-2 border-black bg-black"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <XMarkIcon className="w-8 h-8 text-white" />
            ) : (
              <Bars3Icon className="w-8 h-8 text-white" />
            )}
          </div>
        </div>
      </header>

       {/* Fixed Full-Screen Menu */}
       <motion.div
        className={`fixed top-0 left-0 w-full h-full bg-white text-black p-6 z-40 ${
          menuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-row h-full">
          {/* Menu Items */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left flex-1">
            <div className="flex flex-col justify-center items-start h-full md:mx-10">
              <ul className="space-y-7 text-xl md:text-5xl font-bold font-montserrat text-left md:mx-12">
                <li>
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-gray-700"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#client"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-gray-700"
                  >
                    Client
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutus"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-gray-700"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-gray-700"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pro"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-gray-700"
                  >
                    For Pro's
                  </Link>
                </li>

                {/* Mobile Only: Sign In and Join as a Pro */}
                <li className="md:hidden mt-8 border-t pt-4">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="flex items-center space-x-2 font-poppins">
                      <LogIn className="w-5 h-5" />
                      <span>
                        <Link
                          to="/login"
                          onClick={() => setMenuOpen(false)}
                          className="hover:text-gray-700"
                        >
                          Login
                        </Link>
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 font-poppins">
                      <UserPlus className="w-5 h-5" />
                      <span>
                        <Link
                          to="/join"
                          onClick={() => setMenuOpen(false)}
                          className="hover:text-gray-700"
                        >
                          Join as a Pro
                        </Link>
                      </span>
                    </div>
                    <div className="md:hidden text-sm underline text-green-700 mt-5 font-poppins">
                      info@thebeebark.com
                    </div>
                    <div className="md:hidden text-sm underline text-green-700 font-poppins">
                      +91 7701858312
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info and Social Media Icons */}
          <div className="hidden md:flex flex-col items-start space-y-5 justify-center mx-12 mt-10">
            <div className="text-xl underline font-bold text-green-700 font-poppins">
              info@thebeebark.com
            </div>
            <div className="text-xl underline font-bold text-green-700 font-poppins">
              +91 7701858312
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61560873622756"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6 text-black hover:text-gray-700" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6 text-black hover:text-gray-700" />
              </a>
              <a
                href="https://www.instagram.com/thebeebark/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-black hover:text-gray-700" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
