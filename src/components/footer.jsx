import React from 'react';
import { Facebook, Instagram, Linkedin, X } from 'lucide-react'; // Import icons from lucide-react

const Footer = () => {
  // Function to handle navigation (simulated for this example)
  const navigateTo = (path) => {
    console.log(`Navigating to: ${path}`);
    // In a real React app, you would use react-router-dom's history.push(path) or navigate(path)
    // For this standalone example, we'll just log the navigation.
    // window.location.href = path; // Uncomment this line to actually navigate in a browser
  };

  return (
    <footer className="w-full bg-[#221912] text-white py-10 px-4 sm:px-6 lg:px-8 mt-auto font-sans antialiased">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start text-center lg:text-left">

        {/* Left Column for Laptop: Company Name & Navigation */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          {/* Company Name */}
          <div className="mb-6 lg:mb-8"> {/* Adjusted margin for spacing */}
            <h3 className="text-2xl sm:text-3xl font-bold font-inter">BEE BARK</h3>
          </div>

          {/* Navigation Links */}
          <nav className="mb-0"> {/* mb-0 to remove extra margin if stacked */}
            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-lg sm:text-xl font-inter">
              <li><button onClick={() => navigateTo('/home')} className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">Home</button></li>
              <li><button onClick={() => navigateTo('/services')} className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">Services</button></li>
              <li><button onClick={() => navigateTo('/work')} className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">Work</button></li>
              <li><button onClick={() => navigateTo('/about')} className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">About</button></li>
              <li><button onClick={() => navigateTo('/contact')} className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none">Contact</button></li>
            </ul>
          </nav>
        </div>

        {/* Right Column for Laptop: Social Media Icons & Legal Links */}
        <div className="flex flex-col items-center lg:items-end">
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-6 lg:mb-8"> {/* Adjusted margin for laptop layout */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Facebook className="h-7 w-7 sm:h-8 sm:w-8" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram className="h-7 w-7 sm:h-8 sm:w-8" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin className="h-7 w-7 sm:h-8 sm:w-8" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <X className="h-7 w-7 sm:h-8 sm:w-8" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="text-sm sm:text-base text-gray-500 font-inter flex flex-col lg:flex-row gap-x-4 gap-y-2"> {/* Changed to flex-col on mobile, flex-row on laptop */}
            <button onClick={() => navigateTo('/imprint')} className="hover:text-white transition-colors duration-300 focus:outline-none">Imprint</button>
            <button onClick={() => navigateTo('/privacy')} className="hover:text-white transition-colors duration-300 focus:outline-none">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
