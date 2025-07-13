// src/components/FunnelEllipses.jsx
import React from 'react';

const FunnelEllipses = () => {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 1000" preserveAspectRatio="xMidYMid meet">
      {/* Stage 1 Ellipse */}
      <ellipse cx="600" cy="200" rx="450" ry="100" stroke="#a78bfa" strokeWidth="2" fill="none" className="opacity-90" /> {/* Purple-300 / 400 */}
      {/* Stage 2 Ellipse */}
      <ellipse cx="600" cy="450" rx="380" ry="100" stroke="#a78bfa" strokeWidth="2" fill="none" className="opacity-75" /> {/* Purple-200 / 300 */}
      {/* Stage 3 Ellipse */}
      <ellipse cx="600" cy="700" rx="310" ry="100" stroke="#a78bfa" strokeWidth="2" fill="none" className="opacity-65" /> {/* Purple-100 / 200 */}
      {/* Stage 4 Ellipse */}
      <ellipse cx="600" cy="950" rx="240" ry="100" stroke="#a78bfa" strokeWidth="2" fill="none" className="opacity-55" /> {/* Purple-50 / 100 */}
    </svg>
  );
};

export default FunnelEllipses;