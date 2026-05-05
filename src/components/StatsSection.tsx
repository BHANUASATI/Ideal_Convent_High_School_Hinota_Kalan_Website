'use client'
import React, { useEffect, useRef, useState } from 'react';
import studentImage from '../assets/images/student.jpg';
import teacherImage from '../assets/images/teacher.jpg';
import statsImage from '../assets/images/stats.jpg';
import awardImage from '../assets/images/award.jpg';

const statsData = [
  { number: 5000, label: "Students", image: studentImage },
  { number: 200, label: "Expert Faculty", image: teacherImage },
  { number: 95, label: "Success Rate", image: statsImage },
  { number: 50, label: "Awards", image: awardImage },
];

const StatsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStart(true),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] text-white overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full"></div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 relative z-10">

        {/* 🔥 TOP SECTION (LEFT CONTENT + RIGHT CARD) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* LEFT */}
          <div>

            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Our Achievements
              </span>
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Over the years, we have built a strong foundation of excellence,
              innovation, and student success. Our commitment to quality education
              reflects in every milestone we achieve.
            </p>

            <p className="text-gray-400 mb-8">
              From academic brilliance to extracurricular success, our students
              consistently achieve top results and recognition.
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">Top School</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">100% Growth</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">Modern Labs</span>
            </div>

          </div>

          {/* RIGHT HIGHLIGHT CARD */}
          <div className="relative">

            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105 transition">

              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Excellence in Numbers
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                Our achievements are a reflection of our dedication to student success,
                modern learning, and continuous growth.
              </p>

              <div className="space-y-3 text-sm text-gray-400">
                <p>✔ Consistent Top Results</p>
                <p>✔ Experienced Faculty Team</p>
                <p>✔ Strong Academic Foundation</p>
              </div>

            </div>

          </div>

        </div>

        {/* 📊 STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} start={start} />
          ))}

        </div>

      </div>
    </section>
  );
};

const StatCard = ({ stat, start }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const increment = stat.number / (duration / 16);

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.number) {
        setCount(stat.number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, stat.number]);

  return (
    <div className="relative h-[300px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-500">

      {/* IMAGE */}
      <img
        src={stat.image}
        alt={stat.label}
        className="absolute w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6">

        <h3 className="text-5xl font-bold text-white group-hover:text-cyan-400 transition">
          {count}+
        </h3>

        <p className="text-gray-200 mt-2">{stat.label}</p>

      </div>

      {/* BORDER GLOW */}
      <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400 rounded-3xl transition"></div>

    </div>
  );
};

export default StatsSection;