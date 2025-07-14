import React from 'react';
import FunnelStageInteractive from './FunnelStageInteractive';

const funnelData = [
  {
    stage: 1,
    title: "Branding",
    tagline: "Build a Brand That Commands Attention.",
    activities: [
      "Brand Strategy",
      "Visual Identity",
      "Verbal Identity",
      "Brand Guidelines",
      "Brand Architecture",
      "Brand Experiences",
    ],
  },
  {
    stage: 2,
    title: "Digital Marketing",
    tagline: "Reach More. Sell More. Be Everywhere.",
    activities: [
      "SEO & SEM",
      "Meta & Google Ads",
      "Email Marketing",
      "Social Strategy",
      "Funnel Optimization",
      "Analytics & Reporting",
    ],
  },
  {
    stage: 3,
    title: "Website Design",
    tagline: "Design That Does More Than Look Good.",
    activities: [
      "Responsive Design",
      "UI/UX Strategy",
      "Conversion Optimization",
      "Interactive Experiences",
      "CMS Setup",
      "Performance Tuning",
    ],
  },
  {
    stage: 4,
    title: "Development",
    tagline: "Code That Powers Growth.",
    activities: [
      "Tech Consulting",
      "API Integration",
      "Frontend/Backend Dev",
      "Mobile App Dev",
      "AI/AR/VR",
      "Web3 & Blockchain",
    ],
  },
];

const FunnelContainer = () => {
  return (
    <div className="w-full bg-gray-50 py-20 flex flex-col items-center gap-16 font-sans"> {/* Added font-sans for Inter */}
      {funnelData.map((data) => (
        <FunnelStageInteractive
          key={data.stage}
          stageNumber={data.stage}
          title={data.title}
          tagline={data.tagline}
          activities={data.activities}
        />
      ))}
    </div>
  );
};

export default FunnelContainer;