'use client'
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Student",
    text: "This school helped me grow academically and personally. Teachers are very supportive and friendly.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Amit Verma",
    role: "Parent",
    text: "Excellent environment and discipline. My child has improved a lot in studies and behavior.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Neha Singh",
    role: "Student",
    text: "Smart classes and activities make learning fun and engaging every day.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Rahul Mehta",
    role: "Parent",
    text: "The school focuses on overall development. Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Priya Kapoor",
    role: "Student",
    text: "Teachers explain concepts clearly and motivate us to do better.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextIndex = (current + 1) % testimonials.length;

  return (
    <section className="py-32 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] text-white relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4">

        {/* 🔥 TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* LEFT CONTENT */}
          <div>

            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Trusted by Students & Parents
              </span>
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Thousands of students and parents trust our school for quality education,
              discipline, and overall development.
            </p>

            {/* STATS */}
            <div className="flex gap-8 mb-8">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">4.9★</h3>
                <p className="text-gray-400 text-sm">Average Rating</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">3K+</h3>
                <p className="text-gray-400 text-sm">Happy Parents</p>
              </div>
            </div>

            {/* BADGES */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">Verified Reviews</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">Top Rated School</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">Trusted Community</span>
            </div>

          </div>

          {/* RIGHT CARDS */}
          <div className="relative h-[350px]">

            {/* MAIN CARD */}
            <div className="absolute w-full z-10 transition duration-500">

              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 hover:scale-105 transition">

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonials[current].image}
                    className="w-16 h-16 rounded-full border-2 border-cyan-400"
                  />
                  <div>
                    <h3 className="font-bold">{testimonials[current].name}</h3>
                    <p className="text-sm text-gray-300">{testimonials[current].role}</p>
                  </div>
                </div>

                <p className="text-gray-200 italic mb-4">
                  "{testimonials[current].text}"
                </p>

                <div className="text-yellow-400">★★★★★</div>

              </div>

            </div>

            {/* PREVIEW CARD */}
            <div className="absolute w-full top-6 scale-95 opacity-40 blur-[2px]">

              <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">

                <p className="text-sm text-gray-400">
                  "{testimonials[nextIndex].text}"
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;