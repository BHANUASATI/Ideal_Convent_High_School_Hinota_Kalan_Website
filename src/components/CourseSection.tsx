'use client'
import React, { useRef } from 'react';

/* ICONS */
const ChevronLeft = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const courses = [
  {
    title: "Mathematics",
    desc: "Build strong problem-solving skills with logic & numbers.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000"
  },
  {
    title: "Science",
    desc: "Physics, Chemistry & Biology with practical learning.",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1000"
  },
  {
    title: "English",
    desc: "Communication, grammar & speaking skills.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000"
  },
  {
    title: "Social Studies",
    desc: "History, Geography & Civics concepts.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000"
  },
  {
    title: "Computer",
    desc: "Coding basics & digital literacy.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000"
  },
  {
    title: "Hindi",
    desc: "Reading, writing & language improvement.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000"
  },
  {
    title: "GK",
    desc: "General knowledge & awareness.",
    image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=1000"
  },
  {
    title: "Moral Education",
    desc: "Values, discipline & life skills.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000"
  }
];

const CoursesSection: React.FC = () => {

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth"
    });
  };

  return (
    <section className="py-28 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] text-white relative overflow-hidden">

      {/* 🌟 GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4">

        {/* 🔥 HEADER (NOT CENTERED) */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

          {/* LEFT */}
          <div>
            <h2 className="text-5xl font-extrabold mb-5 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Our Subjects
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We offer a wide range of subjects designed to build strong academic
              foundations and prepare students for real-world challenges.
            </p>

            <div className="flex gap-3 flex-wrap">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">Practical Learning</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">Expert Teachers</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">Smart Classes</span>
            </div>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="hidden md:flex justify-end gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-cyan-500 transition hover:scale-110"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-cyan-500 transition hover:scale-110"
            >
              <ChevronRight />
            </button>
          </div>

        </div>

        {/* 🎯 SLIDER */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-2"
        >

          {courses.map((course, index) => (
            <div
              key={index}
              className="min-w-[280px] relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition duration-500 hover:-translate-y-3 cursor-pointer"
            >

              {/* IMAGE */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

              {/* GLASS */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 backdrop-blur-md transition"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6">

                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition">
                  {course.title}
                </h3>

                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-500">
                  {course.desc}
                </p>

                <button className="mt-4 px-5 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition hover:scale-105">
                  Explore →
                </button>

              </div>

              {/* BORDER GLOW */}
              <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400 rounded-3xl transition"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CoursesSection;