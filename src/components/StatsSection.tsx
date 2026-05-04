'use client'
import React, { useEffect, useRef, useState } from 'react';
import studentImage from '../assets/images/student.jpg';
import teacherImage from '../assets/images/teacher.jpg';
import statsImage from '../assets/images/stats.jpg';
import awardImage from '../assets/images/award.jpg';
const statsData = [
  {
    number: 5000,
    label: "Students",
    image: studentImage
  },
  {
    number: 200,
    label: "Expert Faculty",
    image: teacherImage
  },
  {
    number: 95,
    label: "Success Rate",
    image: statsImage
  },
  {
    number: 50,
    label: "Awards",
    image: awardImage
  },
];

const StatsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#020617] overflow-hidden">

      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full"></div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 text-center">

        {/* TITLE */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
          Our Achievements
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
          We are proud of our legacy of excellence, innovation, and success in shaping future leaders.
        </p>

        {/* GRID */}
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
    <div className="relative h-[300px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">

      {/* IMAGE */}
      <img
        src={stat.image}
        alt={stat.label}
        className="absolute w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6">

        <h3 className="text-5xl font-bold text-white drop-shadow-lg">
          {count}+
        </h3>

        <p className="text-gray-200 text-lg mt-2 font-medium">
          {stat.label}
        </p>

      </div>

      {/* HOVER BORDER GLOW */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400 transition"></div>

      {/* EXTRA LIGHT EFFECT */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition"></div>

    </div>
  );
};

export default StatsSection;