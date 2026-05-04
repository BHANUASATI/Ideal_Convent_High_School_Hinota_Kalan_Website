'use client'
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const TopNavbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#312e81] text-white shadow-2xl border-b border-white/10">

      <div className="w-full px-4 sm:px-6 lg:px-8">

        {/* MAIN NAV */}
        <div className="flex items-center justify-between h-16">

          {/* LEFT - LOGO (proper start alignment) */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-black text-lg shadow-lg hover:scale-105 transition">
              I
            </div>

            <h1 className="text-2xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                ICHS
              </span>
            </h1>
          </div>

          {/* CENTER - CONTENT */}
          <div className="hidden md:flex flex-1 justify-center px-6">
            <div className="w-full max-w-2xl overflow-hidden rounded-full bg-white/10 backdrop-blur-md px-6 py-2 border border-white/10 shadow-inner">
              <div className="animate-marquee whitespace-nowrap">
                <span className="text-sm font-medium tracking-wide">
                  🎓 Admissions Open 2026 • 
                  <span className="text-yellow-300"> Limited Seats</span> • 
                  <span className="text-green-300"> Scholarships Available</span> • 
                  Apply Before March 31 • 
                  🎓 Admissions Open 2026 • 
                  <span className="text-yellow-300"> Limited Seats</span> • 
                  <span className="text-green-300"> Scholarships Available</span> • 
                  Apply Before March 31 •
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT - SOCIAL ICONS */}
          <div className="flex items-center gap-2 sm:gap-3">

            <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-blue-600/30 hover:text-blue-400 transition-all duration-300 hover:scale-110 shadow-md">
              <FaFacebookF />
            </a>

            <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-sky-500/30 hover:text-sky-400 transition-all duration-300 hover:scale-110 shadow-md">
              <FaTwitter />
            </a>

            <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-pink-500/30 hover:text-pink-400 transition-all duration-300 hover:scale-110 shadow-md">
              <FaInstagram />
            </a>

            <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-blue-700/30 hover:text-blue-300 transition-all duration-300 hover:scale-110 shadow-md">
              <FaLinkedinIn />
            </a>

            <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-red-500/30 hover:text-red-400 transition-all duration-300 hover:scale-110 shadow-md">
              <FaYoutube />
            </a>

          </div>
        </div>
      </div>

      {/* MOBILE CONTENT */}
      <div className="md:hidden px-4 pb-3">
        <div className="overflow-hidden rounded-full bg-white/10 px-4 py-2 border border-white/10">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-xs">
              🎓 Admissions 2026 • Limited Seats • Scholarships • Apply Before March 31 •
            </span>
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%) }
          100% { transform: translateX(-50%) }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 18s linear infinite;
        }
      `}</style>

    </nav>
  );
};

export default TopNavbar;