"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "INFO", href: "#about" },
    { name: "WORK", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] h-[72px] transition-all duration-300 flex items-center ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-10 max-w-[1240px] mx-auto flex justify-between items-baseline">
        <Link 
          href="/" 
          className="text-lg md:text-xl font-bold uppercase tracking-[2px] text-[#111111]"
        >
          MUSKAN
        </Link>
        
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-xs font-medium uppercase tracking-[1px] text-[#111111] hover:text-[#555555] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
