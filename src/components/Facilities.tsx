'use client'
import { useState } from "react";

const facilitiesData = [
  {
  title: "Science Lab",
  desc: "Fully equipped lab with modern instruments for practical experiments and innovation.",
  image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000"
},
  {
    title: "Library",
    desc: "A rich collection of books to build strong reading habits.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000"
  },
  {
    title: "Smart Classrooms",
    desc: "Digital boards and modern teaching tools for interactive learning.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000"
  },
  {
    title: "Playground",
    desc: "Large playground for sports and physical development.",
    image: "https://images.unsplash.com/photo-1508606572321-901ea443707f?q=80&w=1000"
  },
  {
    title: "Computer Lab",
    desc: "Advanced systems for coding and digital skills.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000"
  },
  {
    title: "Activity Room",
    desc: "Creative space for arts, crafts, and activities.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000"
  },
  {
    title: "Transport Facility",
    desc: "Safe and reliable transport for students.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000"
  },
  {
  title: "Medical Room",
  desc: "First aid and medical support available at all times.",
  image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1000"
}
];

const Facilities = () => {

  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">

      {/* 🌟 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* 🔥 HEADING */}
        <div className="mb-20 max-w-3xl">

          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Our Facilities
            </span>
          </h2>

          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Our school provides a modern and well-equipped environment designed to support
            academic excellence, creativity, and overall personality development.
          </p>

          <p className="text-gray-400 text-md leading-relaxed mb-8">
            From advanced laboratories to digital classrooms, every facility is built
            to enhance the learning experience and ensure holistic growth.
          </p>

          {/* BADGES */}
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/20">
              Modern Labs
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/20">
              Smart Classes
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/20">
              Safe Campus
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/20">
              Sports Facilities
            </span>
          </div>

        </div>

        {/* 🎯 GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {facilitiesData.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer transition duration-500"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6">

                <h3 className="text-xl font-bold mb-2 group-hover:-translate-y-1 transition">
                  {item.title}
                </h3>

                <p className="text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-500 text-gray-200">
                  {item.desc}
                </p>

              </div>

              {/* BORDER EFFECT */}
              <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400 rounded-3xl transition"></div>

            </div>
          ))}

        </div>

        {/* 🔘 LOAD MORE */}
        {visibleCount < facilitiesData.length && (
          <div className="text-center mt-14">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:scale-105 transition shadow-lg"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Facilities;