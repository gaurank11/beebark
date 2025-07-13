import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
// Assuming your main CSS (where Tailwind is imported) is linked in your main entry file (e.g., src/index.js or src/main.jsx)

// --- Import Your Actual Images from the assets folder ---

import homeMobileImage from '/potterzwheel/1.png';
import propertyListingTablet from '/potterzwheel/5.png';
import servicesLaptop from '/potterzwheel/11.png';
import interiorMobile from '/potterzwheel/3.png';
import aboutUsMobile from '/potterzwheel/4.png';
import blogiPad from '/potterzwheel/8.png';
import allListingsiPad from '/potterzwheel/7.png';
import Interior from '/potterzwheel/14.png';
import Work from '/potterzwheel/15.png';
import property from '/potterzwheel/10.png';
import trevoc from '/potterzwheel/12.png';
import trevoc1 from '/potterzwheel/13.png';
import Blog from '/potterzwheel/16.png';

// For the auto-changing carousel, using available property images and some placeholders if needed for variety
const carouselImages = {
  carouselImg1: Interior, // image_35513e.jpg
  carouselImg2: Work, // image_356b26.jpg
  carouselImg3: property, // image_3560b8.jpg
  // Using generic placeholders for the remaining 2, in case you don't have 5 distinct laptop-sized property images
  carouselImg4: trevoc,
  carouselImg5: trevoc1,
};




// --- Reusable WorkItem Component ---
const WorkItem = ({ title, description, imageUrl, imageAlt, link, isReversed, deviceType, children }) => {
  // Determine image width and height behavior based on deviceType for responsive styling
  let imageContainerClasses = 'w-full flex justify-center';
  let imageClasses = 'w-full object-fit shadow-xl rounded-lg'; // General image styling

  if (deviceType === 'screenshot-mobile') {
      imageClasses += ' max-w-[200px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[250px] h-[300px] sm:h-[300px] md:h-[400px]'; // Narrower, taller
  } else if (deviceType === 'screenshot-tablet' || deviceType === 'screenshot-ipad') {
      imageClasses += ' max-w-md sm:max-w-md md:max-w-xl lg:max-w-xl h-[300px] sm:h-[300px] md:h-[500px]'; // Wider than mobile
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
        <div className={`${imageColumnWidth} ${imageContainerClasses} ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
          {children ? children : (
            <img src={imageUrl} alt={imageAlt || title} className={imageClasses} />
          )}
        </div>

        <div className={`${textColumnWidth} flex flex-col justify-center ${isReversed ? 'md:order-1' : 'md:order-2'} text-center md:text-left`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">{title}</h2>
          <p className="text-lg sm:text-xl mb-6 md:mb-8 max-w-prose mx-auto md:mx-0 opacity-90">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="https://www.potterzwheel.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${isReversed ? 'bg-white text-zinc-900 hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}
            >
              View Live Project
            </Link>

            <Link
              to="/Potterzwheel_casestudy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${isReversed ? 'bg-white text-zinc-900 hover:bg-zinc-200' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}
            >
              View Case Study (PDF)
            </Link>
          </div>
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
    <div className="min-h-screen font-sans antialiased text-zinc-900 bg-gray-50 mt-10">
      {/* --- Header/Nav Bar (can be a separate component if complex) --- */}
      

      <main>
        {/* 1. Portfolio Item: Mobile Responsive Potterzwheel Homepage */}
        <WorkItem
          title="Potterzwheel: Homepage"
          description="PotterzWheel came to us to build a brand-first, high-converting website. We helped bring their real estate platform to life with a clean, modern homepage that builds trust, showcases listings, and positions them as a credible real estate platform."
          imageUrl={homeMobileImage}
          deviceType="screenshot-mobile"
          link="#potterzwheel-home-case-study"
          isReversed={false}
        />

        {/* 2. Portfolio Item: Tablet View of Property Listing */}
        <WorkItem
          title="Potterzwheel: Property Listings"
          description="Our work on the property listing section for Potterzwheel Realty, meticulously optimized for tablet views, provides an intuitive and rich Browse experience."
          imageUrl={propertyListingTablet}
          deviceType="screenshot-tablet"
          link="#potterzwheel-listings-case-study"
          isReversed={true}
        />

        {/* 3. Portfolio Item: Laptop View of Our Services */}
        <WorkItem
          title="Potterzwheel: Services Section"
          description="Developed for Potterzwheel Realty, this laptop-optimized 'Our Services' section showcases their comprehensive real estate offerings with a clean, professional, and easily navigable layout."
          imageUrl={servicesLaptop}
          deviceType="screenshot-laptop"
          link="#potterzwheel-services-case-study"
          isReversed={false}
        />

        {/* 4. Portfolio Item: Mobile Responsive Interior Section */}
        <WorkItem
          title="Potterzwheel: About Page"
          description="We helped craft the About page with an emotional and credible narrative, introducing their mission, journey, and team. The goal was to build connection and confidence among potential partners and clients."
          imageUrl={interiorMobile}
          deviceType="screenshot-mobile"
          link="#potterzwheel-interiors-case-study"
          isReversed={true}
        />

        {/* 5. Portfolio Item: Mobile Responsive About Us page */}
        <WorkItem
          title="Potterzwheel: Contact Page"
          description="A clean, minimal Contact page with strong CTAs was built to increase direct engagement. Integrated with mobile-friendly forms and maps, this page plays a critical role in lead generation."
          imageUrl={aboutUsMobile}
          deviceType="screenshot-mobile"
          link="#potterzwheel-about-case-study"
          isReversed={false}
        />

        {/* 6. Portfolio Item: iPad View of Blog section */}
        <WorkItem
          title="Potterzwheel: Eldeco Project"
          description="We supported the launch of the Eldeco project page with compelling design and copywriting. The layout emphasizes project USPs, floor plans, location advantages, and inquiry CTAs—tailored to convert interested leads into prospects."
          imageUrl={blogiPad}
          deviceType="screenshot-ipad"
          link="#potterzwheel-blog-case-study"
          isReversed={true}
        />

        {/* 7. Portfolio Item: iPad View of All Property Listings */}
        <WorkItem
          title="Potterzwheel: Property Page"
          description="We designed the Properties page to serve as the heart of the platform. From backend property management to front-end filtering and layout—our team delivered a smooth, responsive experience for both buyers and browsers."
          imageUrl={allListingsiPad}
          deviceType="screenshot-ipad"
          link="#potterzwheel-all-properties-case-study"
          isReversed={false}
        />

        {/* --- Section: Auto-Changing Carousel (Laptop Size) --- */}
        <section className="py-16 md:py-24 px-4 bg-gray-100 text-zinc-900">
            
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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Potterzwheel: Trevoc Project</h2>
                <p className="text-lg sm:text-xl opacity-90 max-w-prose mx-auto">
                   For the Trevoc launch, we designed a sleek, image-rich showcase page to highlight the project's premium features. We also optimized it for SEO and ad traffic to boost visibility and conversions.
                </p>
            </div>
            <div className="max-w-6xl mx-auto">
                <img
                  src={trevoc}
                  alt="Property Grand Gallery Feature"
                  className="w-full object-fit rounded-lg shadow-xl"
                  style={{ maxHeight: '700px', width: '100%' }}
                />
            </div>
        </section>

      
        {/* Portfolio Item: Mobile Contact Hero Image */}
        <WorkItem
          title="Potterzwheel: Interiors Page"
          description="We created the Interiors page to position PotterzWheel as more than a property platform—it’s also a destination for end-to-end design solutions. Elegant UI meets thoughtful storytelling to attract design-conscious clients."
          imageUrl={Interior}
          deviceType="screenshot-laptop"
          link="#contact-form-case-study"
          isReversed={true}
        />

        {/* Portfolio Item: Laptop Contact Details */}
        <WorkItem
          title="Potterzwheel: Blog Page"
          description="We built the Blog section as an SEO-focused content hub where PotterzWheel could share real estate insights and drive organic traffic. Designed with reading ease and lead magnets in mind, it’s both educational and strategic."
          imageUrl={Blog}
          deviceType="screenshot-laptop"
          link="#contact-details-case-study"
          isReversed={false}
        />

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
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-white text-[#221912] font-bold rounded-full text-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </section>

      </main>

    
    </div>
  );
}

export default Work1;