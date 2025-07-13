import React from 'react';

const ServiceSection = ({
  title,
  subtitle,
  description,
  points,
  imageSrc,
  isReversed = false,
}) => {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row ${
        isReversed ? 'lg:flex-row-reverse' : ''
      } items-center gap-12 py-24 relative`}
    >
      {/* Background Decorative Blur Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[200px] h-[200px] bg-white rounded-full opacity-20 blur-2xl top-10 left-10 animate-pulse-slow"></div>
        <div className="absolute w-[120px] h-[120px] bg-white rounded-md opacity-30 blur-xl bottom-16 right-16 animate-float"></div>
      </div>

      {/* Text Content */}
      <div className="lg:w-1/2 px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h3>

        {subtitle && (
          <p className="text-yellow-400 font-semibold text-xl mb-4">{subtitle}</p>
        )}

        <p className="text-gray-700 text-lg leading-relaxed mb-6">{description}</p>

        {points && (
          <ul className="list-none space-y-2 text-gray-800 text-base">
            {points.map((point, i) => (
              <li key={i} className="before:content-['—'] before:mr-2">
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Image */}
      <div className="lg:w-1/2 px-4">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-xl w-full max-w-md mx-auto shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ServiceSection;
