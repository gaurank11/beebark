// src/components/FunnelContainer.jsx
import React from 'react';
import FunnelStageInteractive from './FunnelStageInteractive';
import FunnelEllipses from './FunnelEllipses';

const funnelData = [
  {
    stage: 1,
    // Add dummy ellipse positioning values for now, adjust based on your SVG
    ellipseTop: 100, // Approximate top position of the ellipse
    ellipseHeight: 200, // Approximate height of the ellipse
    activities: [
      'SEO', 'SEM/PPC', 'Blogging',
      'Content Marketing', 'Advertising'
    ]
  },
  {
    stage: 2,
    ellipseTop: 350,
    ellipseHeight: 200,
    activities: [
      'Content Marketing', 'Advertising', 'Email Marketing', 'Blogging',
      'Case Studies', 'Marketing Automation', 'Events', 'Webinars'
    ]
  },
  {
    stage: 3,
    ellipseTop: 600,
    ellipseHeight: 200,
    activities: [
      'Demos', 'Sales Collateral', 'Customer Testimonials', 'Case Studies'
    ]
  },
  {
    stage: 4,
    ellipseTop: 850,
    ellipseHeight: 200,
    activities: [
      'Product Tutorials', 'Help Guides', 'Brand Products', 'Content Marketing'
    ]
  }
];

const FunnelContainer = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
      {/* Background Ellipses */}
      <FunnelEllipses />

      {/* Interactive Stages Layered On Top */}
      <div className="absolute inset-0 w-full h-full"> {/* This div acts as the positioning context for absolute stages */}
        {funnelData.map((data) => (
          <FunnelStageInteractive
            key={data.stage}
            stageNumber={data.stage}
            activities={data.activities}
            ellipseTop={data.ellipseTop}
            ellipseHeight={data.ellipseHeight}
          />
        ))}
      </div>
    </div>
  );
};

export default FunnelContainer;