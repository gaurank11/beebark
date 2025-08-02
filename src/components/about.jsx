import React from 'react';
import {Link} from "react-router-dom";

// --- Image URLs from Stock Photo Sites (e.g., Unsplash) ---
// These URLs are illustrative. In a real project, you'd host these images and ideally use a responsive image solution.
const heroImageBeebarkUrl = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80'; // People collaborating, community feel
const communityApproachImage1Url = 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=1200&q=80'; // Design process, mood board (general creative process)
const communityApproachImage2Url = 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80'; // Web development, coding (general tech/growth)
const fullWidthCommunityUrl = 'https://images.unsplash.com/photo-1516321497487-e288ad7ab135?auto=format&fit=crop&w=2400&q=80'; // Networking, community event (broad shot)


const AboutPage = () => {
  return (
    <div className="font-sans bg-white text-[#333333] antialiased">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 pt-10 mt-10">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-inter font-bold leading-tight mb-6 text-black">
            About Beebark
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-black mb-4">
            We’re a growing community for Architects, Designers, Realtors & Builders to showcase work, network, and grow.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-black">
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
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#FF0000] mb-4 md:mb-0">
              What We Do
            </h3>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-3xl md:text-5xl font-inter leading-tight mb-8 text-[#333333]">
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
              className="mt-10 inline-flex items-center text-lg font-semibold text-[#FF0000] hover:text-red-500 transition-colors duration-300"
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
  <h2 className="text-4xl md:text-6xl font-inter leading-tight mb-16 text-center text-[#FF0000]">
    Our Core Values
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
    {[
      {
        number: "01",
      title: "We Begin With Honesty",
      description:
        "We tell the truth—about who we are, what we offer, and what we cannot promise. Honesty is our first act of service to our clients, team, and selves.",
    },
    {
          number: "02",
      title: "We Choose Hope Over Fear",
      description:
        "Even when things are uncertain, we believe that the right people, opportunities, and ideas will meet us as we walk in alignment.",
    },
    {
          number: "03",
      title: "We Surrender to a Higher Vision",
      description:
        "We are not here to just build an ecosystem. We are here to create transformation—within ourselves, for our clients, and through every interaction.",
    },
    {
          number: "04",
      title: "We Stay Accountable",
      description:
        "We regularly review where our business is aligned—and where it's not. We don't hide behind perfection or pride. We clean the mirror daily.",
    },
    {
          number: "05",
      title: "We Share Openly",
      description:
        "We speak about our struggles and our growth. Vulnerability is part of our leadership. Transparency is part of our culture.",
    },
    {
          number: "06",
      title: "We Let Go of What Blocks Us",
      description:
        "Ego, control, fear, procrastination—they don’t lead here. We pause, listen, and choose again. We stay willing to change.",
    },

    ].map((value, index) => (
      <div key={index}>
        <h3 className="text-4xl md:text-5xl font-inter text-[#FF0000] mb-4">{value.number}</h3>
        <h4 className="text-xl md:text-2xl font-semibold mb-4 text-[#333333]">{value.title}</h4>
        <p className="text-base md:text-lg leading-relaxed text-[#555555]">{value.description}</p>
      </div>
    ))}
  </div>

  {/* Manifesto Button */}
  <div className="mt-16 text-center">
    <Link
      to="/manifesto"
      className="inline-block bg-[#FF0000] hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300"
    >
      Read the Full Manifesto
    </Link>
  </div>
</section>

      {/* Cofounders Quote Section */}
   <section className="container mx-auto px-6 py-20 md:py-32">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
    {/* Arjun's Quote */}
    <div>
      <blockquote className="text-2xl md:text-4xl font-inter leading-tight text-[#FF0000] mb-6">
        “More than a platform — it’s where your projects meet new opportunities.”
      </blockquote>
      <p className="text-lg md:text-xl font-semibold uppercase tracking-wider text-black">
        Arjun, Co-founder
      </p>
    </div>

    {/* Aman's Quote */}
    <div>
      <blockquote className="text-2xl md:text-4xl font-inter leading-tight text-[#FF0000] mb-6">
        “At Beebark, we don’t just build — we empower creators to lead with purpose and passion.”
      </blockquote>
      <p className="text-lg md:text-xl font-semibold uppercase tracking-wider text-black">
        Aman, Co-founder
      </p>
    </div>
  </div>
</section>

      {/* Placeholder for a potential CTA / Footer section */}
      <section className="bg-[#FF0000] py-16 text-center text-black">
        <h2 className="text-3xl md:text-4xl font-inter mb-6">Join the Beebark Community Today!</h2>
        <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
