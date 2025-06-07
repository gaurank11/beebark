import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.webm";

export default function HeroSection() {
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          if (videoRef.current) {
            videoRef.current.muted = false; // Ensure unmuted
            videoRef.current.play().catch((err) => {
              console.warn("Autoplay with sound might be blocked by browser:", err);
            });
          }
        } else {
          setIsInView(false);
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleLearnMore = () => {
    navigate("/other-page");
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ fontFamily: "Gotham SSm B, Gotham SSm A, Helvetica, Roboto, Arial, sans-serif" }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted={false}
        loop
        playsInline
      >
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Bottom-Left Text and Button */}
      <div className="absolute bottom-16 left-8 p-6 rounded-xl max-w-md">
        <div className="text-lg md:text-[32px] text-white font-semibold mb-4 leading-relaxed">
          The future belongs to those who believe in the beauty of their dreams.
        </div>
        <button
          className="px-6 py-3 border-2 border-yellow-400 text-white text-sm md:text-xl font-semibold rounded-lg shadow-lg hover:bg-yellow-400 hover:text-white transition-all md:px-12"
          onClick={handleLearnMore}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
