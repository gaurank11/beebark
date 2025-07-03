import React from 'react';

// Main App component
const Work = () => {
  // Sample project data. In a real application, this would likely come from an API or a CMS.
  const projects = [
    {
      id: 'PotterzWheel Realty',
      title: 'PotterzWheel Realty',
      description: 'Brand Strategy, Website Development',
      imageUrl: 'https://placehold.co/600x400/ADD8E6/000000?text=Potterzwheel+Project', // Placeholder image URL
      link: '/work/surfe',
    },
    {
      id: 'Trizzone',
      title: 'Trizzone',
      description: 'Brand Strategy, Website Development',
      imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Trizzone+Project', // Placeholder image URL
      link: '/work/polyai',
    },
    // Add more projects as needed
  ];

  // Function to handle navigation (simulated for this example)
  const navigateTo = (path) => {
    console.log(`Navigating to: ${path}`);
    // In a real React app, you would use react-router-dom's history.push(path) or navigate(path)
    // For this standalone example, we'll just log the navigation.
    // window.location.href = path; // Uncomment this line to actually navigate in a browser
  };

  return (
    <div className="font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Work Section Title (optional, but good for context) */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 mt-8 font-inter">
          Our Work
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              onClick={() => navigateTo(project.link)}
            >
              {/* Project Image */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-200">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                  // Fallback for image loading errors
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = `https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found`;
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6 bg-white rounded-b-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-inter">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg font-inter">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Work Link */}
        <div className="text-center mt-20 mb-10">
          <button
            onClick={() => navigateTo('/work')}
            className="relative inline-block text-2xl sm:text-3xl font-medium text-gray-900 py-2 px-4 group focus:outline-none"
          >
            <span className="relative z-10 font-inter">See more work</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
