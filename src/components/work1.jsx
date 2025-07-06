import React, { useState, useEffect } from 'react';
// Assuming your main CSS (where Tailwind is imported) is linked in your main entry file (e.g., src/index.js or src/main.jsx)

// --- Import Your Actual Images from the assets folder ---

import homeMobileImage from '../assets/home_mobile.png';
import propertyListingTablet from '../assets/home_tablet.png';
import servicesLaptop from '../assets/services.png';
import interiorMobile from '../assets/interior_mobile.png';
import aboutUsMobile from '../assets/about_mobile.png';
import blogiPad from '../assets/blog.png';
import allListingsiPad from '../assets/properties.png';
import mainGalleryProperty from '../assets/page1.png';

// For the auto-changing carousel, using available property images and some placeholders if needed for variety
const carouselImages = {
  carouselImg1: mainGalleryProperty, // image_35513e.jpg
  carouselImg2: propertyListingTablet, // image_356b26.jpg
  carouselImg3: allListingsiPad, // image_3560b8.jpg
  // Using generic placeholders for the remaining 2, in case you don't have 5 distinct laptop-sized property images
  carouselImg4: 'https://via.placeholder.com/1200x750?text=Potterzwheel+Property+D',
  carouselImg5: 'https://via.placeholder.com/1200x750?text=Potterzwheel+Property+E',
};

// Placeholders for sections without specific images provided (e.g., Contact)
const placeholderContactMobileHero = 'https://via.placeholder.com/375x812?text=Contact+Hero+Mobile';
const placeholderContactLaptopDetails = 'https://via.placeholder.com/1200x800?text=Contact+Details+Laptop';


// --- Reusable WorkItem Component ---
const WorkItem = ({ title, description, imageUrl, imageAlt, link, isReversed, deviceType, children }) => {
  // Determine image width and height behavior based on deviceType for responsive styling
  let imageContainerClasses = 'w-full flex justify-center';
  let imageClasses = 'w-full object-fit shadow-xl rounded-lg'; // General image styling

  if (deviceType === 'screenshot-mobile') {
      imageClasses += ' max-w-[250px] sm:max-w-[250px] md:max-w-[250px] lg:max-w-[250px] h-[350px] sm:h-[350px] md:h-[400px]'; // Narrower, taller
  } else if (deviceType === 'screenshot-tablet' || deviceType === 'screenshot-ipad') {
      imageClasses += ' max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-[300px] sm:h-[400px] md:h-[500px]'; // Wider than mobile
  } else if (deviceType === 'screenshot-laptop') {
      imageClasses += ' max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-[250px] sm:h-[350px] md:h-[450px]'; // Widest
  } else {
      imageClasses += ' max-w-full h-auto'; // Default for other types or generic images
  }

  // Adjusted column distribution for better visual balance on wider screens
  const textColumnWidth = 'md:w-2/5 lg:w-5/12'; // Slightly less than half
  const imageColumnWidth = 'md:w-3/5 lg:w-7/12'; // Slightly more than half

  return (
    // Section container: Alternating background color based on 'isReversed'
    <section className={`py-16 md:py-24 px-4 ${isReversed ? 'bg-[#221912] text-white' : 'bg-white text-zinc-900'}`}>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16 lg:gap-20 md:flex-row">

        {/* Image/Child Section: Order changes based on 'isReversed' for desktop view */}
        <div className={`${imageColumnWidth} ${imageContainerClasses} ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
          {/* Render children if provided (for special sections like carousel or custom layouts) */}
          {children ? children : (
            <img
              src={imageUrl}
              alt={imageAlt || title}
              className={imageClasses}
            />
          )}
        </div>

        {/* Text Section: Order changes based on 'isReversed' for desktop view */}
        <div className={`${textColumnWidth} flex flex-col justify-center ${isReversed ? 'md:order-1' : 'md:order-2'} text-center md:text-left`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg sm:text-xl mb-6 md:mb-8 max-w-prose mx-auto md:mx-0 opacity-90">
            {description}
          </p>
          {link && (
            <a
              href={link}
              className={`
                inline-block self-center md:self-start
                px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out
                ${isReversed // Button color changes with background for contrast
                  ? 'bg-white text-zinc-900 hover:bg-zinc-200'
                  : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }
              `}
            >
              View Case Study
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

// --- Auto-Changing Carousel Component ---
const AutoChangingCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up the timer for automatic slide change
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    // Clean up the timer when the component unmounts or dependencies change
    return () => clearInterval(timer);
  }, [images.length, interval]); // Re-run effect if image count or interval changes

  return (
    <div className="relative overflow-hidden rounded-lg shadow-xl w-full" style={{ maxWidth: '1200px', margin: '0 auto', aspectRatio: '16/9' }}>
      {images.map((image, index) => (
        <img
          key={index} // Unique key for each image
          src={image}
          alt={`Carousel Image ${index + 1}`}
          // Apply transition for smooth fade effect
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0' // Only current image is visible
          }`}
        />
      ))}
      {/* Optional: Add navigation dots or arrows here if needed */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`block w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


// --- Main App Component ---
function Work1() {
  const commonPortfolioText = "This section demonstrates our capability in designing and developing compelling digital experiences for real estate. We specialize in creating platforms that redefine user trust and transparency.";

  return (
    <div className="min-h-screen font-sans antialiased text-zinc-900 bg-gray-50">
      {/* --- Header/Nav Bar (can be a separate component if complex) --- */}
      <header className="bg-zinc-900 text-white py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">My Portfolio <span className="text-indigo-400">Works</span></div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
          {/* Mobile menu toggle (e.g., hamburger icon) would go here */}
        </div>
      </header>

      <main>
        {/* 1. Portfolio Item: Mobile Responsive Potterzwheel Homepage */}
        <WorkItem
          title="Potterzwheel Realty: Mobile Homepage"
          description="We designed and developed the mobile-responsive homepage for Potterzwheel Realty, ensuring a seamless and engaging user experience across all smartphone devices."
          imageUrl={homeMobileImage}
          deviceType="screenshot-mobile"
          link="#potterzwheel-home-case-study"
          isReversed={false}
        />

        {/* 2. Portfolio Item: Tablet View of Property Listing */}
        <WorkItem
          title="Potterzwheel Realty: Tablet Property Listings"
          description="Our work on the property listing section for Potterzwheel Realty, meticulously optimized for tablet views, provides an intuitive and rich Browse experience."
          imageUrl={propertyListingTablet}
          deviceType="screenshot-tablet"
          link="#potterzwheel-listings-case-study"
          isReversed={true}
        />

        {/* 3. Portfolio Item: Laptop View of Our Services */}
        <WorkItem
          title="Potterzwheel Realty: Our Services Page (Desktop)"
          description="Developed for Potterzwheel Realty, this laptop-optimized 'Our Services' page showcases their comprehensive real estate offerings with a clean, professional, and easily navigable layout."
          imageUrl={servicesLaptop}
          deviceType="screenshot-laptop"
          link="#potterzwheel-services-case-study"
          isReversed={false}
        />

        {/* 4. Portfolio Item: Mobile Responsive Interior Section */}
        <WorkItem
          title="Potterzwheel Realty: Mobile Interior Showcase"
          description="Showcasing our design capabilities, this mobile-responsive section for Potterzwheel Realty highlights exquisite interior inspirations, making properties immensely more appealing to potential buyers."
          imageUrl={interiorMobile}
          deviceType="screenshot-mobile"
          link="#potterzwheel-interiors-case-study"
          isReversed={true}
        />

        {/* 5. Portfolio Item: Mobile Responsive About Us page */}
        <WorkItem
          title="Potterzwheel Realty: Mobile About Us Page"
          description="We crafted the 'About Us' page for Potterzwheel Realty, a mobile-responsive design that tells their story of trust and transparency in a compelling and accessible way."
          imageUrl={aboutUsMobile}
          deviceType="screenshot-mobile"
          link="#potterzwheel-about-case-study"
          isReversed={false}
        />

        {/* 6. Portfolio Item: iPad View of Blog section */}
        <WorkItem
          title="Potterzwheel Realty: iPad Blog Section"
          description="Designed for optimal viewing on iPads, this blog section for Potterzwheel Realty offers engaging content on real estate insights and market trends, enhancing user retention."
          imageUrl={blogiPad}
          deviceType="screenshot-ipad"
          link="#potterzwheel-blog-case-study"
          isReversed={true}
        />

        {/* 7. Portfolio Item: iPad View of All Property Listings */}
        <WorkItem
          title="Potterzwheel Realty: iPad All Property Listings"
          description="Our comprehensive property listings page, designed for iPad, allows Potterzwheel Realty users to easily browse and filter all available properties, improving discovery."
          imageUrl={allListingsiPad}
          deviceType="screenshot-ipad"
          link="#potterzwheel-all-properties-case-study"
          isReversed={false}
        />

        {/* --- Section: Auto-Changing Carousel (Laptop Size) --- */}
        <section className="py-16 md:py-24 px-4 bg-gray-100 text-zinc-900">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Dynamic Property Visuals (Laptop View)</h2>
                <p className="text-lg sm:text-xl opacity-90 max-w-prose mx-auto">
                    A demonstration of our interactive visual solutions, showcasing properties in a captivating, automatically rotating display for desktop users.
                </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <AutoChangingCarousel
                images={[
                  carouselImages.carouselImg1,
                  carouselImages.carouselImg2,
                  carouselImages.carouselImg3,
                  carouselImages.carouselImg4,
                  carouselImages.carouselImg5,
                ]}
                interval={4000} // Change image every 4 seconds
              />
            </div>
        </section>

        {/* --- Section: Dedicated Gallery Showcase --- */}
        {/* This is for a main gallery display, potentially from a property details page we built. */}
        <section className="py-16 md:py-24 px-4 bg-white text-zinc-900">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Property Detail Gallery Feature</h2>
                <p className="text-lg sm:text-xl opacity-90 max-w-prose mx-auto">
                    A key feature we implemented for property listings: an expansive photo gallery, allowing users to immerse themselves in detailed visuals of each property.
                </p>
            </div>
            <div className="max-w-6xl mx-auto">
                <img
                  src={mainGalleryProperty}
                  alt="Property Grand Gallery Feature"
                  className="w-full object-cover rounded-lg shadow-xl"
                  style={{ maxHeight: '600px', width: '100%' }}
                />
            </div>
        </section>

        {/* --- Section: Our Approach to Property Detail Pages (Common Text) --- */}
        <section className="py-16 md:py-24 px-4 bg-[#221912] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">Our Philosophy in Real Estate Web Design</h2>
            <p className="text-lg sm:text-xl leading-relaxed text-zinc-200">
              {commonPortfolioText}
            </p>
          </div>
        </section>

        {/* --- Section: Call to Action / Final LP Section --- */}
        <section className="py-20 bg-yellow-400 text-white text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">Ready to Transform Your Online Presence?</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Partner with us to create engaging and effective digital solutions for your business.
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-white text-[#221912] font-bold rounded-full text-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Start Your Project
            </a>
          </div>
        </section>

        {/* Portfolio Item: Mobile Contact Hero Image */}
        <WorkItem
          title="Potterzwheel Realty: Mobile Contact Hero"
          description="We crafted a mobile-first contact hero section for Potterzwheel Realty, designed to provide immediate and easy access to their communication channels."
          imageUrl={placeholderContactMobileHero}
          deviceType="screenshot-mobile"
          link="#contact-form-case-study"
          isReversed={false}
        />

        {/* Portfolio Item: Laptop Contact Details */}
        <WorkItem
          title="Potterzwheel Realty: Desktop Contact Details"
          description="The detailed contact information page we built for Potterzwheel Realty, optimized for laptop viewing to ensure all vital contact methods are clearly presented and accessible."
          imageUrl={placeholderContactLaptopDetails}
          deviceType="screenshot-laptop"
          link="#contact-details-case-study"
          isReversed={true}
        />
      </main>

    
    </div>
  );
}

export default Work1;