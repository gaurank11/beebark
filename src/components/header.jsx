import React, { useState, useEffect } from "react";
import { XMarkIcon, Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { LogIn, UserPlus, Instagram, Twitter, Facebook } from "lucide-react";
import { Link, useNavigate, NavLink } from "react-router-dom"; // Ensure these are correctly imported from react-router-dom
import { motion } from "framer-motion";

export default function Header() {
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

  // Close profile menu if mobile menu is opened
  useEffect(() => {
    if (menuOpen) {
      setProfileMenuOpen(false);
    }
  }, [menuOpen]);

  // Close mobile menu if screen size becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint is 768px
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to get classes for NavLink based on active state
  const getNavLinkClasses = (isActive) =>
    `hover:text-gray-700 transition duration-300 ease-in-out pb-1.5 ${
      isActive ? "border-b-2 border-yellow-500" : ""
    }`;

  return (
    <>
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full p-5 flex justify-between items-center z-50 bg-white shadow-md rounded-b-lg">
        <div className="flex items-center space-x-3">
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center">
            {/* Using a placeholder image URL for the logo */}
            <img src="/bbark.png" alt="BeeBark Logo" className="h-12 w-auto rounded-full" />
            <span className="text-2xl font-bold text-black ml-2">BeeBark</span>
          </Link>
        </div>

        {/* Right-side Icons and Menu */}
        <div className="flex items-center space-x-5">
          {/* Desktop Navigation Links (visible on medium and larger screens) */}
          <nav className="hidden md:flex items-center space-x-10 font-poppins text-lg font-semibold">
            <div className="flex items-center text-black font-bold space-x-2 cursor-pointer">
              <NavLink to="/" className={({ isActive }) => getNavLinkClasses(isActive)}>
                Home
              </NavLink>
            </div>
            <div className="flex items-center text-black font-bold space-x-2 cursor-pointer">
              <NavLink to="/services" className={({ isActive }) => getNavLinkClasses(isActive)}>
                Services
              </NavLink>
            </div>
            <div className="flex items-center text-black font-bold space-x-2 cursor-pointer">
              <NavLink to="/work" className={({ isActive }) => getNavLinkClasses(isActive)}>
                Work
              </NavLink>
            </div>
            {/* <div className="flex items-center text-black font-bold space-x-2 cursor-pointer">
              <NavLink to="/testimonials" className={({ isActive }) => getNavLinkClasses(isActive)}>
                Testimonials
              </NavLink>
            </div> */}
            <div className="flex items-center text-black font-bold space-x-2 cursor-pointer">
              <NavLink to="/about" className={({ isActive }) => getNavLinkClasses(isActive)}>
                About
              </NavLink>
            </div>
            <div className="flex items-center text-black font-bold space-x-2 cursor-pointer">
              <NavLink to="/contact" className={({ isActive }) => getNavLinkClasses(isActive)}>
                Contact
              </NavLink>
            </div>
          </nav>



          {/* Mobile Menu Icon (visible on small screens only) */}
          <div
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full cursor-pointer border-2 border-black bg-black"
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

      {/* Fixed Full-Screen Mobile Menu (hidden on medium and larger screens) */}
      <motion.div
        className={`fixed top-0 left-0 w-full h-full bg-white text-black p-6 z-40 md:hidden ${
          menuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Corrected missing div tags */}
        <div className="flex flex-col h-full">
          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <ul className="space-y-7 text-3xl font-bold font-montserrat text-left px-4">
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
                {/* Changed to Link and proper path */}
                <Link
                  to="/services"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-700"
                >
                  Services
                </Link>
              </li>
              <li>
                {/* Changed to Link and proper path */}
                <Link
                  to="/work"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-700"
                >
                  Work
                </Link>
              </li>
  
              <li>
                {/* Changed to Link and proper path */}
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </motion.div>
    </>
  );
}
