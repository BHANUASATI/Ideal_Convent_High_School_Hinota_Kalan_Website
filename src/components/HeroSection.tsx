'use client'
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

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

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">

        {/* 🔥 BADGE */}
        <div className="mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-gray-200">
          🎓 Admissions Open 2026
        </div>

        {/* 🔥 MAIN HEADING */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
          Welcome to  
          <br />
          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            Ideal Convent High School
          </span>
        </h1>

        {/* 🔥 SUBTEXT */}
        <p className="mt-5 text-gray-300 max-w-2xl text-sm sm:text-lg leading-relaxed">
          At Ideal Convent High School, we nurture young minds with quality education, 
          strong values, and modern learning techniques to prepare students for a successful future.
        </p>

        {/* 🔥 HIGHLIGHTS */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-200">
          <span className="bg-white/10 px-3 py-1 rounded-full">🏆 Excellent Academic Results</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">📚 Smart Classrooms</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">👨‍🏫 Experienced Teachers</span>
        </div>

        {/* 🔥 BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-xl hover:scale-105 transition">
            Apply for Admission
          </button>

          <button className="px-8 py-3 rounded-full border border-white text-white font-semibold backdrop-blur-md hover:bg-white hover:text-black transition">
            Explore Courses
          </button>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;