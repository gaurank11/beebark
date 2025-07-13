import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header";
import AboutUs from "./components/aboutus";
import Footer from "./components/footer";
import LetsTalk from "./components/letstalk";
import Contact from "./components/contact";
import LoginPage from "./components/login";
import JoinUs from "./components/join";
import SignUpPage from "./components/signup";
import Service1 from "./components/services1";
import Contact1 from "./components/contact1";
import AboutPage from "./components/about";
import Work1 from "./components/work1";
import ManifestoPage from "./pages/Manifesto";
import WorkPage from "./components/work_page";
import Services from "./components/services";
import Trizzone from "./components/trizzone";

export default function App() {
  const location = useLocation();

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LetsTalk" element={<LetsTalk />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/services" element ={<Services/>} />
           <Route path="/contact" element={<Contact1/>} />
           <Route path="/about" element={<AboutPage/>} />
           <Route path="/potterzwheel" element={<Work1/>} />
           <Route path="/manifesto" element={<ManifestoPage/>} />
            <Route path="/work" element={<WorkPage/>} />
               <Route path="/trizzone" element={<Trizzone/>} />
      
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
