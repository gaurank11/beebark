// import React from 'react';

// // Define the content for Branding Services
// const brandingServices = [
//   {
//     title: "Visual Identity Design",
//     items: [
//       "Logo design (primary + variations)",
//       "Typography system",
//       "Color palette",
//       "Icon style",
//       "Visual inspiration/mood board",
//     ],
//   },
//   {
//     title: "Brand Guidelines Document",
//     items: [
//       "How to use the logo, colors, fonts",
//       "Dos and Don’ts",
//       "Sample layouts (social media, print, etc.)",
//       "File formats and downloads",
//     ],
//   },
//   {
//     title: "Stationery & Social Branding Kit",
//     items: [
//       "Business card design",
//       "Letterhead or proposal template (PDF or Word)",
//       "Branded email signature",
//       "Social media profile branding (cover images, display)",
//       "WhatsApp/business DP frame (if relevant)",
//     ],
//   },
// ];

// // Define the content for Website Design/Development Services
// const websiteServices = [
//   {
//     title: "Business Website Design (Static or CMS)",
//     items: [
//       "5 to 7 responsive pages (Home, About, Services, Projects, Contact, etc.)",
//       "CMS setup (if needed – Webflow, WordPress, Vercel/Next.js)",
//       "Basic SEO structure (meta tags, alt texts)",
//       "Contact form + WhatsApp integration",
//     ],
//   },
//   {
//     title: "Landing Page Design",
//     items: [
//       "Single-page scrolling website (1–3 sections)",
//       "CTA-driven layout (e.g., Book a Call, Download Profile)",
//       "Mobile-first design",
//       "Hosted on Vercel, Framer, or Webflow",
//     ],
//   },
//   {
//     title: "Portfolio or Project Showcase Site",
//     items: [
//       "Grid-style project showcase",
//       "Gallery with hover or scroll interactions",
//       "Custom case study pages (optional)",
//       "Fast-loading + aesthetic-first design",
//     ],
//   },
// ];

// // Main App component for the Services Page
// const Service1 = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
//       {/* Header Section - Mimicking image_d0522d.png */}
//       <header className="container mx-auto py-16 mt-12 px-4 md:text-center ">
//         <h1 className="px-10 text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-gray-900">
//           Our job: solving your business challenges. Let's fix yours.
//         </h1>
//         {/* <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
//           Since 2010, we've helped businesses navigate their growth, from initial concepts to expanding their digital presence. Our strategy-led projects feature weekly deliverables tailored to your needs.
//         </p> */}
//       </header>

//       {/* Services Section - Mimicking image_cfe841.png layout */}
//       <section className="container mx-auto py-12 px-4">
//         {/* Main heading for services */}
//         <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900">
//           Brand services we offer:
//         </h2>

//         {/* Container for all service categories, with the light background */}
//         <div className="bg-yellow-300 p-8 md:p-12 rounded-lg shadow-md">
//           {/* Branding Services Section */}
//           <div className="mb-10">
//             <div className="flex items-center mb-6">
//               {/* Icon for Branding Services (Feather-like SVG) */}
//               <svg className="w-8 h-8 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
//               </svg>
//               <h3 className="text-2xl font-semibold text-black">BRANDING SERVICES</h3>
//             </div>
//             {/* Grid for Branding Service sub-categories */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
//               {brandingServices.map((category, index) => (
//                 <div key={index}>
//                   <h4 className="font-semibold text-gray-800 mb-2">{category.title}</h4>
//                   <ul className="list-disc list-inside text-gray-900 space-y-1">
//                     {category.items.map((item, itemIndex) => (
//                       <li key={itemIndex}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Website Design/Development Services Section */}
//           <div>
//             <div className="flex items-center mb-6">
//               {/* Icon for Website Services (Monitor-like SVG) */}
//               <svg className="w-8 h-8 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-1.25-3M15 10V5a2 2 0 00-2-2H7a2 2 0 00-2 2v5m10 0h4a2 2 0 012 2v5a2 2 0 01-2 2h-4m0 0v-2m0 2v2m0 2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2"></path>
//               </svg>
//               <h3 className="text-2xl font-semibold text-black">WEBSITE DESIGN/DEVELOPMENT SERVICES</h3>
//             </div>
//             {/* Grid for Website Service sub-categories */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
//               {websiteServices.map((category, index) => (
//                 <div key={index}>
//                   <h4 className="font-semibold text-gray-800 mb-2">{category.title}</h4>
//                   <ul className="list-disc list-inside text-gray-900 space-y-1">
//                     {category.items.map((item, itemIndex) => (
//                       <li key={itemIndex}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//        <section className="container mx-auto py-12 px-4 text-center">
//         <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
//           Project Timelines & Investment (Custom Quotes)
//         </h2>
//         <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
//           We offer flexible project engagements to fit your specific needs and budget. After an initial consultation, we'll provide a detailed proposal tailored to your project scope.
//         </p>
//         <button className="mt-8 px-8 py-4 bg-[#221912] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
//           Contact Us to Discuss Your Project
//         </button>
//       </section>
//     </div>
//   );
// };

// export default Service1;

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Branding Services",
    description: `Visual Identity Design, Logo design (primary + variations), Typography system, Color palette,
      Icon style, Mood board, Brand Guidelines Document (Dos and Don’ts, logo usage, colors, fonts),
      Sample layouts (social media, print), File formats and downloads`,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Stationery & Social Branding Kit",
    description: `Business card design, Letterhead or proposal template (PDF or Word), Branded email signature,
      Social media profile branding (cover images, display), WhatsApp/business DP frame`,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Website Design & Development",
    description: `Business Website Design (Static or CMS) – 5 to 7 responsive pages, CMS setup (Webflow, WordPress, Next.js),
      SEO structure (meta tags, alt texts), Contact form + WhatsApp integration`,
    image: "https://images.unsplash.com/photo-1559027615-5c21a3d880d0",
  },
  {
    title: "Landing Page Design",
    description: `Single-page scrolling website (1–3 sections), CTA-driven layout (Book a Call, Download Profile),
      Mobile-first design, Hosted on Vercel, Framer, or Webflow`,
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
  },
  {
    title: "Portfolio / Project Showcase",
    description: `Grid-style project showcase, Gallery with hover/scroll interactions, Optional case study pages,
      Fast-loading aesthetic-first design`,
    image: "https://images.unsplash.com/photo-1607082351786-b5225f5e9a98",
  },
];

export default function Service1() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <header className="text-center py-20 bg-gradient-to-r from-gray-100 to-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We offer complete branding and web solutions with modern designs and practical functionality.
        </motion.p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-20 py-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden bg-white"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 text-base whitespace-pre-line">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <footer className="text-center py-10 border-t mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer>
    </div>
  );
}

