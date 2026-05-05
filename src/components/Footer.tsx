'use client'
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white pt-24 pb-10 overflow-hidden">

      {/* 🌟 GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 relative z-10">

        {/* 🏫 BRAND */}
        <div>
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">
            Ideal Convent High School
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            Providing quality education from Nursery to 10th with CBSE-based curriculum,
            focusing on academic excellence, discipline, and overall development.
          </p>

          <p className="text-sm text-gray-500">
            Built with ❤️ by <span className="text-cyan-400 font-semibold">Bhanu Asati</span>
          </p>
        </div>

        {/* 🔗 QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            {["Home", "Subjects", "Facilities", "Admission"].map((item, i) => (
              <li
                key={i}
                className="hover:text-cyan-400 cursor-pointer transition transform hover:translate-x-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 🎓 FEATURES */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Features</h3>

          <ul className="space-y-3 text-gray-400">
            <li>✔ CBSE Based Curriculum</li>
            <li>✔ Smart & Attractive Classrooms</li>
            <li>✔ Computer Facility</li>
            <li>✔ Spoken English & G.K.</li>
            <li>✔ Caring & Qualified Teachers</li>
          </ul>
        </div>

        {/* 📞 CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

          <p className="text-gray-400 mb-3 flex items-center gap-2">
            <FaMapMarkerAlt className="text-cyan-400" />
            Hinota Kalan, Hatta, Dist. Damoh (M.P.)
          </p>

          <p className="text-gray-400 mb-2 flex items-center gap-2">
            <FaPhone className="text-cyan-400" />
            9993743683
          </p>

          <p className="text-gray-400 mb-4 flex items-center gap-2">
            <FaPhone className="text-cyan-400" />
            9179754986
          </p>

          {/* 🌐 SOCIAL */}
          <div className="flex gap-4 mt-4">

            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-blue-600 transition hover:scale-110">
              <FaFacebookF />
            </a>

            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-pink-500 transition hover:scale-110">
              <FaInstagram />
            </a>

            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-blue-500 transition hover:scale-110">
              <FaLinkedinIn />
            </a>

            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-gray-700 transition hover:scale-110">
              <FaGithub />
            </a>

            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-red-500 transition hover:scale-110">
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

      {/* 🔻 BOTTOM */}
      <div className="border-t border-gray-700 mt-14 pt-6 text-center relative z-10">

        <p className="text-gray-500 text-sm">
          © 2026 Ideal Convent High School. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;