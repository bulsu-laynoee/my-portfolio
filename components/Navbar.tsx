"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaBars, FaTimes, FaFileDownload, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // DITO TAYO NAGBAGO: Idinagdag natin ang 'resolvedTheme'
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Iwas hydration mismatch
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Certifications", href: "/#certifications" },
    { name: "Contact", href: "/#contact" }
  ];

  // HELPER FUNCTION: Para sure na magsi-switch based sa totoong kulay sa screen
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm py-4 border-b border-gray-200/50 dark:border-gray-800/50" : "bg-transparent py-6"}`}>
        <div className="max-w-6xl mx-auto px-6 w-full flex justify-between items-center">
          
          <Link href="/#home" className="text-2xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 z-[110]">
            My Portfolio.
          </Link>

          {/* --- DESKTOP VIEW --- */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-600 dark:text-gray-300">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                {link.name}
              </Link>
            ))}
            
            {/* DARK/LIGHT MODE TOGGLE (DESKTOP) */}
            {mounted && (
              <button 
                onClick={toggleTheme}
                className="text-lg p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                aria-label="Toggle Dark Mode"
              >
                {/* Ginamit ang resolvedTheme para i-check ang icon */}
                {resolvedTheme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon />}
              </button>
            )}

            <a href="/CV-EDWARD-LAYNO-Latest.pdf" target="_blank" className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-md hover:-translate-y-0.5 transition-all">
              <FaFileDownload /> CV
            </a>
          </div>

          {/* --- MOBILE BUTTONS (Menu + Theme Toggle) --- */}
          <div className="md:hidden flex items-center gap-4 z-[110]">
            {mounted && (
              <button 
                onClick={toggleTheme}
                className="text-xl p-2 rounded-full text-gray-600 dark:text-gray-300 active:scale-90 transition-transform"
                aria-label="Toggle Dark Mode"
              >
                {/* Ginamit ang resolvedTheme para i-check ang icon */}
                {resolvedTheme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon />}
              </button>
            )}
            <button 
              className="text-gray-900 dark:text-white text-2xl focus:outline-none active:scale-90 transition-transform" 
              onClick={() => setIsOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE FULL-SCREEN MENU --- */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-slate-950 z-[999] flex flex-col transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
          <span className="text-xl font-extrabold text-blue-600 dark:text-cyan-500">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 p-2 rounded-full active:scale-90 transition-transform">
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow gap-8 px-6 pb-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} 
              className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 active:scale-95 transition-all"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-24 h-[1px] bg-gray-200 dark:bg-gray-800 my-2"></div>
          
          <a 
            href="/CV-EDWARD-LAYNO-Latest.pdf" 
            target="_blank" 
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-3 w-full max-w-[280px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-blue-500/30 active:scale-95 transition-transform"
          >
            <FaFileDownload className="text-xl" /> Download CV
          </a>
        </div>
      </div>
    </>
  );
}