import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import trizzone_home from '/trizzone/1.png';
import trizzone_service from '/trizzone/5.png';
import trizzone_menu from '/trizzone/2.png';
import trizzone_contact from '/trizzone/6.png';
import trizzone_interior from '/trizzone/9.png'
import allListingsiPad from '/potterzwheel/7.png';
import Home from '/trizzone/7.png';
import Menu from '/trizzone/8.png';
import Interior from '/trizzone/9.png';
import Project from '/trizzone/10.png';
import Contact from '/trizzone/11.png';
import Blog from '/potterzwheel/16.png';

const carouselImages = {
  carouselImg1: Home,
  carouselImg2: Menu,
  carouselImg3: Interior,
  carouselImg4: Project,
  carouselImg5: Contact,
};

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
    <section className={`py-16 md:py-24 px-4 ${isReversed ? 'bg-black text-white' : 'bg-white text-zinc-900'}`}>
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
              to="https://www.trizzone.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${isReversed ? 'bg-white text-zinc-900 hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}
            >
              View Live Project
            </Link>

            <Link
              to="/trizzone_casestudy.pdf"
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
function Trizzone() {
  const commonPortfolioText = "This section demonstrates our capability in designing and developing compelling digital experiences. We specialize in creating platforms that redefine user trust and transparency.";

  return (
    <div className="min-h-screen font-sans antialiased text-zinc-900 bg-gray-50 mt-10">
      

      <main>
        {/* 1. Portfolio Item: Mobile Responsive Potterzwheel Homepage */}
      <WorkItem
  title="Trizzone: Opening Animation"
  description="Experience the dynamic introduction to Trizzone through this opening animation. It combines bold visuals and seamless motion to deliver an elegant and clear first impression, immediately conveying the brand's focus on Architecture, Interior, and Landscape."
  isReversed={false}
>
  <video
    className="w-full max-w-4xl rounded-xl shadow-2xl"
    autoPlay
    loop
    muted
    playsInline
    controls={false} // Remove if you want to allow play/pause
  >
    <source src="/trizzone/Animation.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</WorkItem>

        {/* 2. Portfolio Item: Tablet View of Property Listing */}
        <WorkItem
          title="Trizzone: Homepage"
          description="We partnered with Trizzone to redesign their website’s homepage, keeping aesthetics clean and navigation smooth. Our goal was to communicate their identity as a premium architecture and design studio. From concept to execution, the homepage was built to leave a lasting first impression, increase credibility, and drive engagement."
          imageUrl={trizzone_home}
          deviceType="screenshot-mobile"
          isReversed={true}
        />

        {/* 3. Portfolio Item: Laptop View of Our Services */}
        <WorkItem
          title="Trizzone: Service Page"
          description="We structured and designed the Services page to clearly highlight Trizzone’s expertise across architecture, interiors, and real estate branding. The content strategy, layout, and flow were all focused on converting visitors into leads by showcasing value and trust."
          imageUrl={trizzone_service}
          deviceType="screenshot-tablet"
          isReversed={false}
        />

        {/* 4. Portfolio Item: Mobile Responsive Interior Section */}
        <WorkItem
          title="Trizzone: Mobile Navigation Menu"
          description="This Trizzone mobile menu provides intuitive access to Home, About, Services, and Contact, with a modern dark aesthetic."
          imageUrl={trizzone_menu}
          deviceType="screenshot-mobile"
          isReversed={true}
        />

        {/* 5. Portfolio Item: Mobile Responsive About Us page */}
        <WorkItem
          title="Trizzone: Contact Page"
          description="For the Contact page, our focus was simplicity and accessibility. We ensured that visitors could reach out quickly, with a seamless mobile and desktop experience—boosting Trizzone’s client inquiries and appointment bookings."
          imageUrl={trizzone_contact}
          deviceType="screenshot-tablet"
          isReversed={false}
        />

        {/* 6. Portfolio Item: iPad View of Blog section */}
        <WorkItem
          title="Trizzone: Interiors Page"
          description="We designed the Interiors section as a user-friendly listing page. Every project was showcased with clarity—high-quality visuals, filters, and easy navigation, offering users a smooth discovery experience."
          imageUrl={trizzone_interior}
          deviceType="screenshot-laptop"
          isReversed={true}
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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Trizzone: MGI Office Interior Project</h2>
                <p className="text-lg sm:text-xl opacity-90 max-w-prose mx-auto">
                   For this case study page, we helped Trizzone highlight one of their finest interior projects. Our role included building a visually immersive experience with elegant UI and storytelling elements that celebrated their design capabilities and project delivery
                </p>
            </div>
            <div className="max-w-6xl mx-auto">
                <img
                  src={Project}
                  alt="Property Grand Gallery Feature"
                  className="w-full object-fit rounded-lg shadow-xl"
                  style={{ maxHeight: '700px', width: '100%' }}
                />
            </div>
        </section>

    
          {/* --- Section: Our Approach to Property Detail Pages (Common Text) --- */}
        <section className="py-16 md:py-24 px-4 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">Focus on clarity, elegance, and distinct service areas</h2>
            <p className="text-lg sm:text-xl leading-relaxed text-zinc-200">
              {commonPortfolioText}
            </p>
          </div>
        </section>

        {/* --- Section: Call to Action / Final LP Section --- */}
        <section className="py-20 bg-[#FF0000] text-white text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">Ready to Transform Your Online Presence?</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Partner with us to create engaging and effective digital solutions for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full text-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </section>

      </main>

    
    </div>
  );
}

export default Trizzone;
