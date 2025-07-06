import React from 'react';

// --- Image URLs from Stock Photo Sites (e.g., Unsplash) ---
// These URLs are illustrative. In a real project, you'd host these images and ideally use a responsive image solution.
const heroImageBeebarkUrl = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80'; // People collaborating, community feel
const communityApproachImage1Url = 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=1200&q=80'; // Design process, mood board (general creative process)
const communityApproachImage2Url = 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80'; // Web development, coding (general tech/growth)
const fullWidthCommunityUrl = 'https://images.unsplash.com/photo-1516321497487-e288ad7ab135?auto=format&fit=crop&w=2400&q=80'; // Networking, community event (broad shot)


const AboutPage = () => {
  return (
    <div className="font-inter bg-white text-[#333333] antialiased">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 pt-10 mt-10">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6 text-[#333333]">
            About Beebark
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-[#555555] mb-4">
            We’re a growing community for architects, designers, realtors & builders to showcase work, network, and grow.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-[#555555]">
            More than a platform — it’s where your projects meet new opportunities.
          </p>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="w-full h-[300px] md:h-[600px] overflow-hidden mb-20 md:mb-32">
        <img
          src={heroImageBeebarkUrl}
          alt="Beebark community collaborating"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </section>

      {/* WHAT WE DO Section (Replaces old Services Section) */}
      <section className="container mx-auto px-6 pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-yellow-500 mb-4 md:mb-0">
              What We Do
            </h3>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8 text-[#333333]">
              We work with companies that mean the world to their people but need our help to mean something to the world.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-lg md:text-xl leading-relaxed text-[#555555]">
              <p>
                For more than a decade, our team of brand designers, strategists, and writers has helped organizations unlock their fullest potential with bold, original brand identities.
              </p>
              <p>
                Through our singular expertise, strategic problem-solving, and respect for craft, we build distinguished brands with the power to transform people and industries.
              </p>
            </div>
            <a
              href="#" // Link to your dedicated services page
              className="mt-10 inline-flex items-center text-lg font-semibold text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
              LEARN ABOUT OUR PROCESS
            </a>
          </div>
        </div>
      </section>

      {/* Image Collage Section - Our Approach/Community in Action */}
      <section className="container mx-auto px-6 pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="relative w-full h-80 md:h-[450px] rounded-lg overflow-hidden shadow-lg">
            <img
              src={communityApproachImage1Url}
              alt="People discussing design concepts"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative w-full h-80 md:h-[450px] rounded-lg overflow-hidden shadow-lg">
            <img
              src={communityApproachImage2Url}
              alt="Professional working on computer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-16 text-center text-yellow-400">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {/* Value 1 */}
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-yellow-400 mb-4">01</h3>
            <h4 className="text-xl md:text-2xl font-semibold mb-4 text-[#333333]">Community First</h4>
            <p className="text-base md:text-lg leading-relaxed text-[#555555]">
              Fostering a supportive and collaborative environment where architects, designers, realtors, and builders can connect, share, and grow together.
            </p>
          </div>
          {/* Value 2 */}
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-yellow-400 mb-4">02</h3>
            <h4 className="text-xl md:text-2xl font-semibold mb-4 text-[#333333]">Empowering Growth</h4>
            <p className="text-base md:text-lg leading-relaxed text-[#555555]">
              Providing the essential tools, resources, and opportunities that empower professionals to showcase their work, expand their networks, and elevate their careers.
            </p>
          </div>
          {/* Value 3 */}
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-yellow-400 mb-4">03</h3>
            <h4 className="text-xl md:text-2xl font-semibold mb-4 text-[#333333]">Quality & Craft</h4>
            <p className="text-base md:text-lg leading-relaxed text-[#555555]">
              Upholding the highest standards in everything we do, from the quality of our platform and services to the integrity of our interactions, valuing excellence and meticulous craft.
            </p>
          </div>
          {/* Value 4 */}
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-yellow-400 mb-4">04</h3>
            <h4 className="text-xl md:text-2xl font-semibold mb-4 text-[#333333]">Innovation & Adaptability</h4>
            <p className="text-base md:text-lg leading-relaxed text-[#555555]">
              Continuously evolving our platform and services, embracing new technologies and ideas to meet the dynamic needs of the architecture, design, and construction industries.
            </p>
          </div>
          {/* Value 5 */}
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-yellow-400 mb-4">05</h3>
            <h4 className="text-xl md:text-2xl font-semibold mb-4 text-[#333333]">Transparency & Trust</h4>
            <p className="text-base md:text-lg leading-relaxed text-[#555555]">
              Building strong, lasting relationships based on open communication, honesty, and mutual respect, ensuring trust is at the core of every interaction.
            </p>
          </div>
          {/* Value 6 */}
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-yellow-400 mb-4">06</h3>
            <h4 className="text-xl md:text-2xl font-semibold mb-4 text-[#333333]">Impact Driven</h4>
            <p className="text-base md:text-lg leading-relaxed text-[#555555]">
              Committed to creating tangible value and positive impact for our users, ensuring that our platform helps them achieve their professional goals and expand their influence.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Quote Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 text-center">
        <blockquote className="text-4xl md:text-5xl font-serif leading-tight text-[#6B5742] mb-8">
          “More than a platform — it’s where your projects meet new opportunities.”
        </blockquote>
        <p className="text-lg md:text-xl font-semibold uppercase tracking-wider text-[#333333]">
          Arjun Tandon, CEO & Co-founder
        </p>
      </section>

      {/* Placeholder for a potential CTA / Footer section */}
      <section className="bg-[#E2DED0] py-16 text-center text-[#333333]">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Join the Beebark Community Today!</h2>
        <button className="bg-[#6B5742] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#333333] transition-colors duration-300">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutPage;