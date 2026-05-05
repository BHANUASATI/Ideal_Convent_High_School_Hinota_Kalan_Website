'use client'
import { useState } from "react";

const Admission = () => {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    class: "",
    message: ""
  });

  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  return (
    <section className="py-28 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">

      {/* 🌟 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-500 opacity-20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500 opacity-20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center relative z-10">

        {/* 🎥 LEFT VIDEO */}
        <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl group">

          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          >
            <source src="/videos/schoolvideo.mp4" type="video/mp4" />
          </video>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* TEXT */}
          <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl font-bold mb-2">
              Build a Bright Future
            </h3>
            <p className="text-gray-300">
              Smart education for the next generation.
            </p>
          </div>

        </div>

        {/* 🧠 RIGHT FORM */}
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20 hover:scale-[1.02] transition">

          <h2 className="text-4xl font-bold mb-6">
            Admission Open 2026
          </h2>

          {/* 👀 AI FACE */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">

              <div className="flex gap-3">
                <div className={`w-3 bg-white rounded-full transition-all duration-300 ${isFocused ? "h-1" : "h-3"}`}></div>
                <div className={`w-3 bg-white rounded-full transition-all duration-300 ${isFocused ? "h-1" : "h-3"}`}></div>
              </div>

            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 bg-transparent border border-white/30 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none hover:border-cyan-400 transition"
              required
            />

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              placeholder="Parent Phone"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={form.phone}
              onChange={handleChange}
              className="w-full p-4 bg-transparent border border-white/30 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none hover:border-cyan-400 transition"
              required
            />

            {/* CLASS */}
            <select
              name="class"
              value={form.class}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full p-4 bg-black/40 border border-white/30 rounded-lg"
              required
            >
              <option value="">Select Class</option>
              {[...Array(10)].map((_, i) => (
                <option key={i}>Class {i + 1}</option>
              ))}
            </select>

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full p-4 bg-transparent border border-white/30 rounded-lg"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition"
            >
              Submit Application →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Admission;