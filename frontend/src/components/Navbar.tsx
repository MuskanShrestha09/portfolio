"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] h-[72px] transition-all duration-500 ${
        isScrolled
          ? "bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white"
        >
          Muskan<span className="text-[#6c63ff]">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#a0a0a0] hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:muskan@example.com"
            className="text-sm font-semibold px-5 py-2 rounded-full bg-[#6c63ff] text-white hover:bg-[#5a52e0] transition-colors duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[rgba(10,10,10,0.97)] backdrop-blur-xl border-b border-white/[0.06] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-[#a0a0a0] hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:muskan@example.com"
            className="text-sm font-semibold px-5 py-2 rounded-full bg-[#6c63ff] text-white text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
