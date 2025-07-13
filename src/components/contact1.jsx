import React from 'react';
import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Contact1 = () => {
  return (
    // The main container for all sections. Added 'pt-20' (padding-top: 5rem)
    // to push content down, accounting for a potential fixed header.
    <div className="min-h-screen bg-white flex flex-col font-inter relative pt-20 mt-12">

      {/* Section 1: Say hello (Image and Contact Info) */}
      {/* Removed the 'mt-10' from this div, as 'pt-20' on the parent handles overall top spacing.
          The 'top' value for 'Say hello' text needs adjustment relative to this change. */}
      <div className="flex flex-col lg:flex-row items-center justify-center relative w-full max-w-7xl mx-auto">
        {/* "Say hello" text - positioned absolutely to overlap both sections */}
        {/* Adjusted 'top' value to be relative to its new parent's position within the padded area.
            'top-[initial]' on large screens and a slightly lower 'top-[5%]' on small screens
            can help maintain overlap without being too high. */}
        <h1 className="absolute z-10 text-5xl font-bold text-white mix-blend-difference top-[-5%] left-4 lg:text-7xl lg:top-[-7%] lg:left-[15%] lg:-translate-x-[60%]">
          Say hello
        </h1>

        {/* Left Section: Image */}
        <div className="w-full lg:w-3/5 flex justify-center items-center p-0 lg:p-0">
          <div className="relative w-full h-64 lg:h-[500px] overflow-hidden">
            <img
              src="/contact_image.png" // Using image_4036df.jpg for the main contact image
              alt="Beebark office environment with team members"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/800x600/221912/FFD700?text=Beebark+Image+Not+Found';
              }}
            />
          </div>
        </div>

        {/* Right Section: Contact Information with Map Background */}
        <div
          className="w-full lg:w-2/5 p-8 relative text-white flex flex-col justify-center"
          style={{
            backgroundColor: '#555555',
            // Using a placeholder map for Delhi. Replace YOUR_Maps_API_KEY with your actual key.
            backgroundImage: `url("/location.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            minHeight: '400px',
          }}
        >
          {/* Overlay for readability, slightly less opaque for map to show through better */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 space-y-8">
            {/* Email */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <Mail className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Shoot us an Email</p>
                <a href="mailto:info@thebeebark.com" className="text-yellow-400 text-lg font-medium hover:underline">info@thebeebark.com</a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                  <Phone className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Give us a Call</p>
                <a href="tel:+917701858312" className="text-yellow-400 text-lg font-medium hover:underline">+91 7701858312</a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <MapPin className="w-6 h-6 text-yellow-400" />

              </div>
              <div>
                <p className="text-gray-300 text-sm">Visit our Delhi Office</p>
                <p className="text-yellow-400 text-lg font-medium">125, Second Floor, 125, Shahpur Jat, Siri Fort, New Delhi, Delhi 110049</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: "Do you want to work with us?" */}
      <div className="w-full max-w-7xl mx-auto p-8 lg:p-0 mt-16 mb-16 flex flex-col lg:flex-row lg:space-x-8">
        {/* Left column for description */}
        <div className="w-full lg:w-1/2 space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to Join the Beebark Team?</h2>
          <p>
            At Beebark, we're constantly seeking passionate and talented individuals to enhance our creative team.
            If you're eager to contribute to innovative projects and grow in a dynamic environment, we'd love to hear from you.
          </p>
          <p>
            You'll work on impactful projects, focusing on delivering exceptional user experiences and robust solutions.
            Our team collaborates closely, ensuring a supportive and engaging atmosphere for all.
          </p>
          <p>
            Our designers and developers are involved from conception to completion, fostering a deep understanding of each project.
            As a part of Beebark, you'll have ample opportunities to learn, take initiative, and shape the future of our work.
          </p>
          <p>
            We review all applications carefully and appreciate your patience as we get back to you.
          </p>
        </div>

        {/* Right column for requirements */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 bg-gray-50 p-8 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">What We Look For at Beebark:</h3>
          <ul className="space-y-4 text-gray-700">
            <li>... a strong portfolio demonstrating your skills and creativity</li>
            <li>... proficiency in relevant design and development tools</li>
            <li>... a passion for crafting engaging digital experiences</li>
            <li>... excellent communication skills to collaborate effectively with team members and clients</li>
            <li>... an ability to tackle complex challenges with innovative and visually appealing solutions</li>
          </ul>
          <p className="mt-8 text-gray-700">
            Send your application with your portfolio (link or PDF) to
          </p>
          <div className="mt-4">
            <a
              href="mailto:careers@thebeebark.com" // Changed email to a more career-specific one for Beebark
              className="inline-block bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
            >
              info@thebeebark.com
            </a>
          </div>
        </div>
      </div>

      {/* Section 3: Image Gallery (1 image, then 2 parallel images) */}
      <div className="w-full max-w-7xl mx-auto p-8 lg:p-0 mt-16 mb-16">
        {/* Full-width image */}
        <div className="w-full h-80 lg:h-[600px] overflow-hidden mb-8">
          <img
            src="/coworking1.webp" // Reusing this image as a general office/team shot
            alt="Beebark team collaborating in the office"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/1200x600/999999/FFFFFF?text=Beebark+Gallery+Image+1';
            }}
          />
        </div>

        {/* Two parallel images */}
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="w-full lg:w-1/2 h-64 lg:h-96 overflow-hidden mb-8 lg:mb-0">
            <img
              src="/coworking2.webp" // Using the image with the dog and legs
              alt="A dog resting near a window at Beebark office"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x400/AAAAAA/FFFFFF?text=Beebark+Gallery+Image+2';
              }}
            />
          </div>
          <div className="w-full lg:w-1/2 h-64 lg:h-96 overflow-hidden">
            <img
              src="/coworking3.webp" // Placeholder for another team-related image
              alt="Beebark team member on a call"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x400/BBBBBB/FFFFFF?text=Beebark+Gallery+Image+3';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;