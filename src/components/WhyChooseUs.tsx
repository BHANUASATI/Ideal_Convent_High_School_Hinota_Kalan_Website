'use client'
import React, { useState, useEffect } from "react";

/* FEATURES */
const features = [
  { title: "Experienced Teachers", desc: "Highly qualified teachers focused on student success.", icon: "👩‍🏫" },
  { title: "Smart Classrooms", desc: "Interactive digital classrooms for better learning.", icon: "💻" },
  { title: "Safe Environment", desc: "Secure campus with proper discipline & safety.", icon: "🛡️" },
  { title: "Sports & Activities", desc: "Focus on physical and mental development.", icon: "⚽" },
  { title: "Modern Learning", desc: "Updated curriculum with practical approach.", icon: "📚" },
  { title: "Career Guidance", desc: "Helping students choose the right future path.", icon: "🎯" }
];

/* SLIDES */
const slides = [
  {
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200",
    title: "Modern Classrooms",
    desc: "Interactive smart classes for better understanding."
  },
  {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200",
    title: "Active Learning",
    desc: "Students engaged in practical learning."
  },
  {
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200",
    title: "Sports & Growth",
    desc: "Balanced focus on academics and fitness."
  }
];

const WhyChooseUs = () => {

  const [current, setCurrent] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 bg-white font-body">

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-tight animate-fadeInUp">
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              Why Choose Our School?
            </span>
          </h2>

          <p className="text-gray-600 text-lg mb-10 leading-relaxed animate-fadeInUp delay-200">
            We provide a perfect balance of academic excellence, modern learning,
            and overall development for every student.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="text-3xl">{item.icon}</div>

                <div>
                  <h4 className="font-semibold text-gray-800 font-heading">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-600 font-body">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SLIDER */}
        <div className="relative w-full h-[450px] overflow-hidden rounded-3xl shadow-2xl">

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* TEXT */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold font-heading">{slide.title}</h3>
                <p className="text-sm font-body">{slide.desc}</p>
              </div>
            </div>
          ))}

          {/* DOTS */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === i ? "bg-white" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;