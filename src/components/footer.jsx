import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

const Footer = () => {
  const navigate = useNavigate();  


  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <footer className="w-full bg-[#221912] text-white py-10 px-4 sm:px-6 lg:px-8 mt-auto font-sans antialiased">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start text-center lg:text-left">

        {/* Left Column for Laptop: Company Name & Navigation */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <div className="mb-6 lg:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold font-inter">BEEBARK</h3>
          </div>

          <nav className="mb-0">
            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-lg sm:text-xl font-inter">
              <li><button onClick={() => navigateTo('/')} className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">Home</button></li>
              <li><button onClick={() => navigateTo('/services')} className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">Services</button></li>
              <li><button onClick={() => navigateTo('/work')} className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">Work</button></li>
              <li><button onClick={() => navigateTo('/about')} className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">About</button></li>
              <li><button onClick={() => navigateTo('/contact')} className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">Contact</button></li>
            </ul>
          </nav>
        </div>

        {/* Right Column: Socials and Legal */}
        <div className="flex flex-col items-center lg:items-end">
          <div className="flex space-x-6 mb-6 lg:mb-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Facebook className="h-7 w-7 sm:h-8 sm:w-8" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram className="h-7 w-7 sm:h-8 sm:w-8" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin className="h-7 w-7 sm:h-8 sm:w-8" />
            </a>
          </div>

          <div className="text-sm sm:text-base text-gray-500 font-inter flex flex-col lg:flex-row gap-x-4 gap-y-2">
            <button onClick={() => navigateTo('/terms')} className="hover:text-white transition-colors duration-300 focus:outline-none">Terms & Conditions</button>
            <button onClick={() => navigateTo('/privacy')} className="hover:text-white transition-colors duration-300 focus:outline-none">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
