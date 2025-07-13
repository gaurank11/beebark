// Services.jsx
import React from 'react';
import ServiceSection from './ServiceSection';

const FloatingShape = ({ className, children }) => (
  <div className={`absolute z-0 ${className} pointer-events-none`}>
    {children}
  </div>
);

const Services = () => {
  return (
    <div className="min-h-screen bg-white font-sans relative overflow-x-hidden">
      {/* Floating Animated 3D-like Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Cube */}
        <FloatingShape className="top-[12%] left-[6%] w-[22rem] h-[22rem] animate-cube">
          <div className="w-full h-full bg-yellow-50 shadow-2xl transform rotate-45"></div>
        </FloatingShape>

        {/* Square Pyramid */}
        <FloatingShape className="bottom-[15%] right-[8%] w-[22rem] h-[22rem] animate-pyramid">
          <div className="w-0 h-0 border-l-[240px] border-r-[240px] border-b-[400px] border-l-transparent border-r-transparent border-b-yellow-50 opacity-80"></div>
        </FloatingShape>

        {/* Cone */}
        <FloatingShape className="top-[45%] left-[40%] w-[22rem] h-[22rem] animate-cone">
          <div className="w-0 h-0 border-l-[200px] border-r-[200px] border-b-[400px] border-l-transparent border-r-transparent border-b-yellow-50 rounded-b-full opacity-70"></div>
        </FloatingShape>

        {/* Ring (Donut) */}
        <FloatingShape className="bottom-[25%] left-[10%] w-[22rem] h-[22rem] animate-ring rounded-full border-[48px] border-yellow-100 border-t-transparent border-l-transparent opacity-50"></FloatingShape>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 text-center pt-24 pb-16 mt-10 font-sans">
          Transforming Ideas into Iconic Digital Brands
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center mb-20 max-w-3xl mx-auto font-sans">
         From vision to execution — we craft brands, design immersive interfaces, engineer scalable systems, and drive digital growth with powerful marketing.
        </p>

        {/* Sections */}
     <ServiceSection
  title="Branding"
  subtitle="🟡 Build a Brand That Commands Attention."
  description="We don’t do logos—we create identities. From naming to visuals to voice, we shape brands that stand tall, speak loud, and stay unforgettable. Whether you're starting fresh or evolving, we craft a brand presence that owns space in the market—and in minds."
  points={[
    'Brand Strategy',
    'Brand Architecture',
    'Verbal Identity',
    'Visual Identity',
    'Brand Guidelines',
    'Brand Experiences',
  ]}
  imageSrc="/branding.jpg"
/>

<ServiceSection
  title="Digital Marketing"
  subtitle="🔴 Reach More. Sell More. Be Everywhere."
  description="We don’t guess—we strategize. From Meta Ads to Google Ads, SEO to email flows, we create digital campaigns that generate real results. We find your audience, speak their language, and move them to action. Growth isn’t a dream—it’s the plan."
  points={[
    'SEO & SEM',
    'Meta & Google Ads',
    'Email Marketing',
    'Funnel Optimization',
    'Analytics & Reporting',
    'Social Media Strategy',
  ]}
  imageSrc="/marketing.webp"
  isReversed
/>

<ServiceSection
  title="Website Design"
  subtitle="🔵 Design That Does More Than Look Good."
  description="Your website is more than a portfolio—it's your frontline. We build high-performing, mobile-first websites that don't just look amazing, but work like your best salesperson—24/7. Fast, intuitive, and conversion-focused. Designed to turn visitors into believers."
  points={[
    'Responsive Web Design',
    'UI/UX Strategy',
    'Interactive Experiences',
    'Conversion Optimization',
    'Custom CMS Setup',
    'Performance Tuning',
  ]}
  imageSrc="/webdesign.jpg"
/>

<ServiceSection
  title="Development"
  subtitle="🟢 Code That Powers Growth."
  description="We optimize search engine visibility, ensure accessibility, and maximize performance."
  points={[
    'Tech Consulting',
    'Architecture Planning',
    'Mobile App Dev',
    'Frontend/Backend Dev',
    'API Integration',
    'AI, AR/VR, Web3',
  ]}
  imageSrc="/development.jpg"
  isReversed
/>
      </div>

      {/* Style Block */}
      <style jsx="true">{`
        @keyframes cube {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes ring {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pyramid {
          0% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0); }
        }

        @keyframes cone {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }

        .animate-cube {
          animation: cube 25s linear infinite;
        }

        .animate-ring {
          animation: ring 30s linear infinite;
        }

        .animate-pyramid {
          animation: pyramid 10s ease-in-out infinite;
        }

        .animate-cone {
          animation: cone 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;
