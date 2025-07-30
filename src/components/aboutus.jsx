import React from "react";
import logo from "/bbark.png"
import { useNavigate } from 'react-router-dom'; 

const AboutUs = () => {

   const navigate = useNavigate();  


  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Desktop and Laptop View */}
      <div className="hidden md:grid md:grid-cols-2 min-h-screen">
        {/* Left Grid - Content */}
        <div className="bg-[#221912] flex flex-col justify-center items-center p-8">
          <div className="max-w-md text-left">
            <h2 className="text-5xl font-bold mb-4 text-white font-sans">
             Real Solutions for Real Brands. Built to Lead. Built to Win.
            </h2>
            <p className="text-2xl text-gray-100 mb-6 text-left font-inter">
              At <span className="font-bold text-[#FF0000]">BeeBark</span>,
            we don’t just build websites or run ads. we build brands that refuse to be ignored.
           No noise. No fluff. Just pure, unapologetic execution.
          If you're here to play it safe, we're not for you.
           But if you're here to make noise, break rules, and own your space
            </p>
            <button onClick={() => navigateTo('/about')}className="px-6 py-3 text-[#FF0000] font-medium border-2 border-[#FF0000] rounded hover:bg-[#FF0000] hover:text-white font-inter">
              Company
            </button>
          </div>
        </div>

        {/* Right Grid - Logo */}
        <div className="bg-[#FF0000] flex items-center justify-center">
          <div className="bg-white p-6 rounded-full shadow-lg">
            <img
              src={logo}
              alt="TheBeeBark Logo"
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden bg-[#FF0000] flex flex-col justify-between min-h-screen p-6">
        {/* Logo Section */}
        <div className="flex flex-grow items-center justify-center">
          <div className="bg-white p-6 rounded-full shadow-lg">
            <img
              src={logo}
              alt="TheBeeBark Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="text-left text-white max-w-sm mt-auto">
          <h2 className="text-2xl font-bold mb-4 font-sans">
       Real Solutions for Real Brands. Built to Lead. Built to Win.
          </h2>
          <p className="text-base mb-6 font-inter">
            At <span className="font-bold">BeeBark</span>, we don’t just build websites or run ads. we build brands that refuse to be ignored. No noise. No fluff. Just pure, unapologetic execution. If you're here to play it safe, we're not for you.
           But if you're here to make noise, break rules, and own your space.
          </p>
          <button onClick={() => navigateTo('/about')} className="px-6 py-3 text-[#221912] font-medium bg-white rounded border-2 border-white hover:text-white font-inter">
            Company
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
