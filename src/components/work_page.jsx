import React from 'react';
import { useNavigate } from 'react-router-dom';

// Main App component
const WorkPage = () => {
     const navigate = useNavigate();  


  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <div className="font-sans bg-white text-black min-h-screen ">
      {/* Hero Section for TheBeeBark */}
      <section className="bg-[#221912] text-center py-20 px-4 mt-12  text-white">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-75">BeeBark: Built to Lead. Built to Win.</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">We build brands that refuse to be ignored.</h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
          No noise. No fluff. Just pure, unapologetic execution. If you're here to play it safe, we're not for you. But if you're here to make noise, break rules, and own your space—
        </p>
        <button onClick={() => navigateTo('/contact')} className="bg-[#FF0000] hover:bg-[#FF0000] text-[#221912] font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
          WORK WITH US
        </button>
      </section>

       {/* Project Section 1 (Potterzwheel) - Parallel layout with full image/placeholder */}
      <section className="flex flex-col md:flex-row items-stretch bg-white text-[#221912]  shadow-xl mx-auto overflow-hidden">
        <div className="md:w-1/2 p-6 md:p-10 py-16 md:py-24"> {/* Content box with padding */}
          <p className="text-sm uppercase tracking-widest mb-4 text-gray-700">Client Project</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Potterzwheel: Building homes, shaping dreams.
          </h2>
          <p className="text-md md:text-lg mb-8 text-gray-800">
            Specialize in connecting you with the perfect property while redefining trust and transparency in real estate. Let's create a seamless journey toward your ideal home.
          </p>
          <button onClick={() => navigateTo('/potterzwheel')} className="bg-[#221912] hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
            SEE OUR WORK
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center items-center bg-blue-900 mt-8 md:mt-0"> {/* Image box without internal padding */}
          {/* Placeholder for Trizzone image. Replace 'https://placehold.co/600x400/FFD700/000000?text=Trizzone+Image' with your actual image URL */}
          <img
            src="/Potterzwheel.png"
            alt="Potterzwheel"
            className="w-full h-full object-fit" // Ensure image fills and maintains aspect ratio
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/CCCCCC/000000?text=Image+Error'; }}
          />
        </div>
      </section>

      {/* Project Section 2 (Trizzone) - Parallel layout with full image */}
      <section className="flex flex-col md:flex-row-reverse items-stretch text-black  shadow-xl mx-auto  overflow-hidden">
        <div className="md:w-1/2 p-6 md:p-10 py-16 md:py-24"> {/* Content box with padding */}
          <p className="text-sm uppercase tracking-widest mb-4 text-gray-700">Client Project</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Trizzone: Portfolio for architect, interior designer, landscape work.
          </h2>
          <p className="text-md md:text-lg mb-8 text-gray-800">
            Showcasing innovative designs and transformative spaces across architecture, interior design, and landscape artistry.
          </p>
          <button onClick={() => navigateTo('/trizzone')} className="bg-[#221912] hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
            SEE OUR WORK
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center bg-black mt-8 md:mt-0"> {/* Image box without internal padding */}
          {/* Placeholder for Trizzone image. Replace 'https://placehold.co/600x400/FFD700/000000?text=Trizzone+Image' with your actual image URL */}
          <video
    className="w-full max-w-4xl rounded-xl shadow-2xl"
    autoPlay
    loop
    muted
    playsInline
    controls={false} // Remove if you want to allow play/pause
  >
    <source src="/trizzone/Animation.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        </div>
      </section>

      {/* Call to Action Section for TheBeeBark */}
      <section className="bg-[#E2DED0]  text-center py-20 px-4">
        <div className="border-t border-b border-gray-700 py-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight text-[#221912]">Ready to make some noise?</h2>
          <button onClick={() => navigateTo('/contact')} className="bg-yellow-400 hover:bg-yellow-500 text-[#221912] font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
