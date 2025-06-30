import React, { useEffect, useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const GreyNavbar = () => {
  const [bgColor, setBgColor] = useState("bg-white");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentBg = "bg-white";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          if (section.id === "press") currentBg = " bg-white";
          else if (section.id === "image-grid") currentBg = "bg-white";
          else if (section.id === "banking-hero") currentBg = "bg-transparent";
          else if (section.id === "footer-section") currentBg = "bg-black";
        }
      });

      setBgColor(currentBg);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 shadow-sm ${bgColor}`} id="navbar">
      {/* Left section: Logo and Language */}
      <div className="flex items-center gap-6">
        <a href="/" aria-label="home" className="flex items-center" style={{ filter: "invert(100%)" }}>
          <img
            src="https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/6563c15e45db91a91be06020_Grey%20Logo%20Lockup%20White%201.svg"
            alt="Grey Logo"
            className="w-24 h-auto object-contain"
          />
        </a>
        <button className=" md:flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-full text-sm text-black hover:bg-gray-100">
          <Globe className="w-4 h-4 text-blue-600" />
          <span>EN</span>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Center nav links - show only on large screens */}
      <div className="min-[768px]:flex max-md:hidden items-center gap-14 text-gray-800 font-medium text-sm">
        <a href="#">Products</a>
        <a href="#">Learn</a>
        <a href="#">Company</a>
      </div>

      {/* Right section - hidden on small screens */}
      <div className="max-md:hidden min-[768px]:flex items-center gap-4">
        <Link to='login' className="text-gray-700 font-medium text-sm">Log in</Link>
        <Link to='/signup'>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition">
          Get started — it's free
        </button>
        </Link>
      </div>

      {/* Hamburger Icon - shown on small screens */}
      <div className="md:hidden">

        <button onClick={() => setMenuOpen(true)}>
          <Menu className="w-6 h-6 text-black" />
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 space-y-6 transition-all">
          <div className="flex items-center justify-between">
            {/* Logo again in mobile */}
            <a href="/" aria-label="home" className="flex items-center" style={{ filter: "invert(100%)" }}>
              <img
                src="https://cdn.prod.website-files.com/6360022338a81bd6fdbb1145/6563c15e45db91a91be06020_Grey%20Logo%20Lockup%20White%201.svg"
                alt="Grey Logo"
                className="w-24 h-auto object-contain"
              />
            </a>

            {/* Close Button */}
            <button onClick={() => setMenuOpen(false)}>
              <X className="w-6 h-6 text-black" />
            </button>
          </div>

          <div className="flex flex-col gap-4 text-black text-base font-medium">
            <a href="#" className="flex justify-between items-center">Products <span>&gt;</span></a>
            <a href="#" className="flex justify-between items-center">Learn <span>&gt;</span></a>
            <a href="#" className="flex justify-between items-center">Company <span>&gt;</span></a>
          </div>

          <div className="mt-auto space-y-4">
            <button className="w-full bg-black text-white py-3 rounded-md font-semibold">Log In</button>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold">Get started – It's free</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default GreyNavbar;
