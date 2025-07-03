import React from 'react';

const Contact1 = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center font-inter relative mt-10 ">
      {/* "Say hello" text - positioned absolutely to overlap both sections */}
      {/* Adjusted positioning to ensure visibility and overlap on various screens */}
      <h1 className="absolute z-20 text-5xl font-bold text-white mix-blend-difference top-[12%] left-4 lg:text-7xl lg:top-16 lg:left-[15%] lg:-translate-x-[60%]">
        Say hello
      </h1>

      {/* Left Section: Image */}
      <div className="w-full lg:w-3/5 flex justify-center items-center p-0 lg:p-0"> {/* Removed padding here to maximize image width */}
        <div className="relative w-full h-64 lg:h-[500px] overflow-hidden"> {/* Removed rounded-lg and shadow-lg from here for simpler comparison with original image */}
          <img
            src="/contact_image.png" // Use your actual image path here, assuming it's in the public folder
            alt="Two men smiling"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/800x600/221912/FFD700?text=Image+Not+Found';
            }}
          />
        </div>
      </div>

      {/* Right Section: Contact Information with Map Background */}
      <div
        className="w-full lg:w-2/5 p-8 relative text-white flex flex-col justify-center"
        style={{
          // Use a default background color in case the map image fails to load
          backgroundColor: '#555555', // A darker grey fallback for now, as seen in your screenshot
          backgroundImage: 'url(https://maps.googleapis.com/maps/api/staticmap?center=Delhi,India&zoom=10&size=600x600&maptype=roadmap&markers=color:red%7Clabel:D%7CDelhi,India&key=AIzaSyXXXXXX...)', // Replace YOUR_API_KEY
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px', // Ensure it has a height similar to the image
        }}
      >
        {/* Overlay for readability, slightly less opaque for map to show through better */}
        <div className="absolute inset-0 bg-black opacity-40"></div> 
        <div className="relative z-10 space-y-8">
          {/* Email */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-300 text-sm">Shoot us an Email</p>
              <a href="mailto:info@thebeebark.com" className="text-yellow-400 text-lg font-medium hover:underline">info@thebeebark.com</a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9.87a1 1 0 00.54 1.06l7.18 3.59a1 1 0 001.06.54l3.59-.718a1 1 0 01.718.106l.718.718a1 1 0 01.106.718l-.718 3.59a1 1 0 01-.54 1.06l-3.59.718a1 1 0 01-1.06-.54l-7.18-3.59a1 1 0 00-1.06-.54l-3.59.718a1 1 0 01-.718-.106l-.718-.718a1 1 0 01-.106-.718l.718-3.59a1 1 0 01.54-1.06z"></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-300 text-sm">Give us a Call</p>
              <a href="tel:+917701858312" className="text-yellow-400 text-lg font-medium hover:underline">+91 7701858312</a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m11.314 0A8.996 8.996 0 0012 15c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-300 text-sm">Say Hello, and Grab a Coffee or Beer</p>
              <p className="text-yellow-400 text-lg font-medium">Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;