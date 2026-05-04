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

  return (
    <nav className="fixed top-16 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200">

      {/* DESKTOP NAV */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-20 relative">

          {/* CENTER LINKS */}
          <div className="hidden md:flex items-center gap-8">

            <NavItem icon={<FaHome />} label="Home" />

            <NavItem icon={<FaInfoCircle />} label="About" />

            {/* ACADEMICS */}
            <Dropdown
              icon={<FaBook />}
              label="Academics"
              isOpen={dropdown === "academics"}
              onEnter={() => setDropdown("academics")}
              onLeave={() => setDropdown(null)}
              items={["Curriculum", "Departments", "Library"]}
            />

            {/* ADMISSION */}
            <Dropdown
              icon={<FaUserGraduate />}
              label="Admission"
              isOpen={dropdown === "admission"}
              onEnter={() => setDropdown("admission")}
              onLeave={() => setDropdown(null)}
              items={["Apply Now", "Fee Structure", "Scholarships"]}
            />

            <NavItem icon={<FaPhone />} label="Contact" />

          </div>

          {/* MOBILE BUTTON */}
          <div className="absolute right-0 md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4 bg-white shadow-inner">

          <MobileItem icon={<FaHome />} label="Home" />
          <MobileItem icon={<FaInfoCircle />} label="About" />

          <MobileDropdown title="Academics" items={["Curriculum", "Departments", "Library"]} />
          <MobileDropdown title="Admission" items={["Apply Now", "Fee Structure", "Scholarships"]} />

          <MobileItem icon={<FaPhone />} label="Contact" />

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

        /* COOL UNDERLINE EFFECT */
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

        /* DROPDOWN */
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

/* MOBILE DROPDOWN */
const MobileDropdown = ({ title, items }: any) => (
  <div>
    <p className="font-semibold text-gray-800">{title}</p>
    {items.map((item: string, i: number) => (
      <div key={i} className="pl-4 text-gray-500 text-sm py-1">
        {item}
      </div>
    ))}
  </div>
);

export default SecondNavbar;