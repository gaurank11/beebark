import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  const projects = [
    {
      id: 'PotterzWheel Realty',
      title: 'Potterzwheel Realty',
      description: 'Brand Strategy, Website Development',
      type: 'image',
      imageUrl: '/Potterzwheel.png',
      link: '/potterzwheel',
    },
    {
      id: 'Trizzone',
      title: 'Trizzone',
      description: 'Brand Strategy, Website Development',
      type: 'video',
      videoUrl: '/trizzone/Animation.mp4',
      link: '/trizzone',
    },
  ];

  return (
    <div className="font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 mt-8 font-inter">
          Our Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 block"
            >
              <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-200">
                {project.type === 'image' ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found`;
                    }}
                  />
                ) : (
                  <video
                    className="w-full h-full object-cover rounded-t-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              <div className="p-6 bg-white rounded-b-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-inter">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg font-inter">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
