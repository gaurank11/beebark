import React from 'react';

import { Categories } from '../components/Categories';
import { Professionals } from '../components/Professionals';
import AboutUs from '../components/aboutus';
import Hero1 from '../components/DreamHero';
import HeroSection from '../components/Hero';
import Services from '../components/services';
import M_Services from '../components/m_services';
import AutoScrollPortfolio from '../components/Portfolio_auto';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />
      <AboutUs />
     <AutoScrollPortfolio/>
      <Categories />
       {/* <Services /> */}
  
    
      </div>
  
  );
};

export default Home;
