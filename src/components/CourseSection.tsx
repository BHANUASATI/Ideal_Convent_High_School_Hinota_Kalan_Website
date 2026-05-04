'use client'
import React from 'react';

const courses = [
  {
    title: "Science Stream",
    desc: "Explore Physics, Chemistry, and Mathematics with advanced labs and expert faculty.",
    image: "/images/science.jpg"
  },
  {
    title: "Commerce Stream",
    desc: "Learn Business, Accounts, and Economics with real-world applications.",
    image: "/images/commerce.jpg"
  },
  {
    title: "Arts Stream",
    desc: "Develop creativity and critical thinking with Humanities subjects.",
    image: "/images/arts.jpg"
  },
  {
    title: "Primary Education",
    desc: "Strong foundation with interactive learning and fun-based education.",
    image: "/images/primary.jpg"
  }
];

const CoursesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">

      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* HEADING */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Our Courses
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          We offer a wide range of academic programs designed to nurture knowledge,
          skills, and creativity for a bright future.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}

        </div>

      </div>
    </section>
  );
};

/* CARD */
const CourseCard = ({ course }: any) => {
  return (
    <div className="relative group rounded-3xl overflow-hidden shadow-xl cursor-pointer">

      {/* IMAGE */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-[300px] object-cover transition duration-700 group-hover:scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* CONTENT */}
      <div className="absolute bottom-0 p-6 text-left">

        <h3 className="text-2xl font-bold text-white mb-2">
          {course.title}
        </h3>

        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
          {course.desc}
        </p>

        {/* BUTTON */}
        <button className="mt-3 px-4 py-2 bg-white text-black text-sm rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-105">
          Learn More →
        </button>

      </div>

      {/* HOVER EFFECT BORDER */}
      <div className="absolute inset-0 border border-transparent group-hover:border-blue-400 rounded-3xl transition"></div>

    </div>
  );
};

export default CoursesSection;