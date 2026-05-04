'use client'
import React, { useEffect, useRef } from 'react';
import image from '../assets/school.jpg';
const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  // SCROLL ANIMATION
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-indigo-100 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400/30 blur-[120px] rounded-full"></div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center opacity-0 translate-y-10 transition-all duration-1000"
      >

        {/* IMAGE SIDE */}
        <div className="relative group">
          <img
            src={image}  
            alt="School"
            className="rounded-3xl shadow-2xl w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
          />

          {/* GLASS OVERLAY */}
          <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* FLOATING BADGE */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-xl px-5 py-3 rounded-xl text-sm font-semibold animate-bounce">
            🎓 20+ Years Excellence
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Building Bright Futures with
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Modern Education
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Our school is committed to delivering high-quality education that
            nurtures creativity, critical thinking, and leadership. We provide a
            dynamic environment where students thrive academically and personally.
          </p>

          {/* FEATURE CARDS */}
          <div className="mt-8 grid grid-cols-2 gap-5">

            {[
              { icon: "🎓", title: "Expert Faculty" },
              { icon: "💻", title: "Smart Classrooms" },
              { icon: "🏆", title: "Top Results" },
              { icon: "⚽", title: "Holistic Growth" }
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/70 backdrop-blur-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium text-gray-700">{item.title}</span>
              </div>
            ))}

          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex gap-4">

            <button className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
              Explore More
            </button>

            <button className="px-7 py-3 rounded-full border border-blue-500 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
              Watch Video
            </button>

          </div>

        </div>

      </div>

      {/* ANIMATION CLASS */}
      <style>{`
        .show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

    </section>
  );
};

export default AboutSection;