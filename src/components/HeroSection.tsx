'use client'
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-36">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/schoolvideo.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">

        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
          Empowering Future Leaders
          <br />
          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            Through Quality Education
          </span>
        </h1>

        <p className="mt-4 text-gray-200 max-w-2xl text-sm sm:text-lg">
          Join our institution where innovation meets excellence. 
          We nurture young minds with modern learning and future-focused education.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition">
            Apply Now
          </button>

          <button className="px-6 py-3 rounded-full border border-white text-white font-semibold backdrop-blur-md hover:bg-white hover:text-black transition">
            Explore Courses
          </button>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;