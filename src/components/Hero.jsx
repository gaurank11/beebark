import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

// Mock Link and useNavigate for self-contained example
// In a real React app, these would be imported from 'react-router-dom'


export default function HeroSection() {
  const [underlineVisible, setUnderlineVisible] = useState(false);


  useEffect(() => {
    // Set a timeout to make the underline visible after 2 seconds
    const timer = setTimeout(() => {
      setUnderlineVisible(true);
    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once after initial render

  
  return (
    <section className="flex pt-10 mt-12 h-[80vh] items-center md:h-[83vh]  bg-gray-50 p-6">
      <div className="text-left max-w-6xl mx-2 mt-10 md:mx-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-gray-900 leading-tight mb-8">
          We build the strongest web for your{" "}
          <span className="relative inline-block">
            brand
            <span
              className={`absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transition-all duration-500 ease-out transform ${
                underlineVisible ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </span>
        
        </h1>

        {/* Sub-text */}
        <p className="text-lg md:text-xl text-gray-700 font-sans mb-10">
          BeeBark is a global B2B brand agency.
        </p>

        {/* Learn More Link */}
        <Link
          to="/services"
          className="inline-flex items-center text-[#221912] hover:text-yellow-400 font-semibold text-lg transition duration-300 ease-in-out group"
        >
          <span className="mr-2">LEARN ABOUT OUR BRAND PROCESS</span>
          {/* Arrow Icon (SVG) */}
          <svg
            className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
