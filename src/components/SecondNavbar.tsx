'use client'
import React, { useState } from 'react';
import {
  FaHome,
  FaUserGraduate,
  FaBook,
  FaInfoCircle,
  FaPhone,
  FaChevronDown,
  FaBars,
  FaTimes
} from "react-icons/fa";

const SecondNavbar: React.FC = () => {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown(prev => (prev === name ? null : name));
  };

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200">

      {/* TOP SPACING */}
      <div className="max-w-7xl mt-28 md:mt-20 mx-auto px-4">
        
        {/* HEADER */}
        <div className="flex items-center h-20 relative">

          {/* LEFT SPACE */}
          <div className="w-10 md:hidden" />

          {/* CENTER TEXT */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
            <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
              Welcome to ICHS
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 mx-auto">

            <NavItem icon={<FaHome />} label="Home" />
            <NavItem icon={<FaInfoCircle />} label="About" />

            <Dropdown
              icon={<FaBook />}
              label="Academics"
              isOpen={dropdown === "academics"}
              onEnter={() => setDropdown("academics")}
              onLeave={() => setDropdown(null)}
              items={["Curriculum", "Departments", "Library"]}
            />

            <Dropdown
              icon={<FaUserGraduate />}
              label="Admission"
              isOpen={dropdown === "admission"}
              onEnter={() => setDropdown("admission")}
              onLeave={() => setDropdown(null)}
              items={["Apply Now", "Fee Structure", "Scholarships"]}
            />

            <NavItem icon={<FaPhone />} label="Contact" />

            {/* ✅ LOGIN / SIGNUP BUTTONS */}
            <div className="flex items-center gap-3 ml-4">
              <button className="px-4 py-1.5 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 transition">
                Login
              </button>
              <button className="px-4 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-md">
                Signup
              </button>
            </div>

          </div>

          {/* RIGHT MENU BUTTON */}
          <div className="ml-auto md:hidden z-50">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg bg-white shadow-md hover:bg-gray-100 active:scale-95 transition"
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 space-y-4 bg-white shadow-inner">

          <MobileItem icon={<FaHome />} label="Home" />
          <MobileItem icon={<FaInfoCircle />} label="About" />

          {/* MOBILE DROPDOWN - ACADEMICS */}
          <div>
            <div
              onClick={() => toggleMobileDropdown("academics")}
              className="flex justify-between items-center cursor-pointer font-semibold"
            >
              <span className="flex items-center gap-2">
                <FaBook /> Academics
              </span>
              <FaChevronDown
                className={`transition-transform ${
                  mobileDropdown === "academics" ? "rotate-180" : ""
                }`}
              />
            </div>

            {mobileDropdown === "academics" && (
              <div className="pl-6 mt-2 space-y-2 text-sm text-gray-500">
                <p>Curriculum</p>
                <p>Departments</p>
                <p>Library</p>
              </div>
            )}
          </div>

          {/* MOBILE DROPDOWN - ADMISSION */}
          <div>
            <div
              onClick={() => toggleMobileDropdown("admission")}
              className="flex justify-between items-center cursor-pointer font-semibold"
            >
              <span className="flex items-center gap-2">
                <FaUserGraduate /> Admission
              </span>
              <FaChevronDown
                className={`transition-transform ${
                  mobileDropdown === "admission" ? "rotate-180" : ""
                }`}
              />
            </div>

            {mobileDropdown === "admission" && (
              <div className="pl-6 mt-2 space-y-2 text-sm text-gray-500">
                <p>Apply Now</p>
                <p>Fee Structure</p>
                <p>Scholarships</p>
              </div>
            )}
          </div>

          <MobileItem icon={<FaPhone />} label="Contact" />

          {/* ✅ MOBILE LOGIN / SIGNUP */}
          <div className="pt-4 border-t flex flex-col gap-3">
            <button className="w-full py-2 rounded-lg border border-blue-500 text-blue-600">
              Login
            </button>
            <button className="w-full py-2 rounded-lg bg-blue-600 text-white shadow">
              Signup
            </button>
          </div>

        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .nav-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
          position: relative;
          cursor: pointer;
          padding: 6px 10px;
          transition: 0.3s;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background: linear-gradient(to right, #3b82f6, #6366f1);
          transition: 0.3s;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .nav-item:hover {
          color: #2563eb;
          transform: translateY(-2px);
        }

        .dropdown {
          position: absolute;
          top: 50px;
          left: 0;
          background: white;
          border-radius: 14px;
          padding: 12px;
          min-width: 200px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          animation: dropdownFade 0.25s ease;
        }

        .dropdown a {
          display: block;
          padding: 8px 10px;
          border-radius: 8px;
          transition: 0.2s;
        }

        .dropdown a:hover {
          background: linear-gradient(to right, #3b82f6, #6366f1);
          color: white;
          transform: translateX(4px);
        }

        @keyframes dropdownFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </nav>
  );
};

/* NAV ITEM */
const NavItem = ({ icon, label }: any) => (
  <div className="nav-item">
    {icon} {label}
  </div>
);

/* DROPDOWN */
const Dropdown = ({ icon, label, items, isOpen, onEnter, onLeave }: any) => (
  <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
    <div className="nav-item">
      {icon} {label} <FaChevronDown size={12} />
    </div>

    {isOpen && (
      <div className="dropdown">
        {items.map((item: string, i: number) => (
          <a key={i}>{item}</a>
        ))}
      </div>
    )}
  </div>
);

/* MOBILE ITEM */
const MobileItem = ({ icon, label }: any) => (
  <div className="flex items-center gap-3 font-medium text-gray-700">
    {icon} {label}
  </div>
);

export default SecondNavbar;