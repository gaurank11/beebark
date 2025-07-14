import React from 'react';

const FunnelEllipses = () => {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 1000" preserveAspectRatio="xMidYMid meet">
      <ellipse cx="600" cy="200" rx="450" ry="100" stroke="#a78bfa" strokeWidth="2" fill="none" className="opacity-90" />
      <ellipse cx="600" cy="450" rx="380" ry="100" stroke="#a78bfa" strokeWidth="2" fill="none" className="opacity-75" />
      <ellipse cx="600" cy="700" rx="310" ry="100" stroke="#a78bfa" strokeWidth="2" fill="none" className="opacity-65" />
      <ellipse cx="600" cy="950" rx="240" ry="100" stroke="#a78bfa" strokeWidth="2" fill="none" className="opacity-55" />
    </svg>
  );
};

export default FunnelEllipses;