"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { certificationsData } from "@/data/certification";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Quadrupled data para may sapat na buffer ang scroll lalo na kapag nag-manual click
  const loopingCerts = [...certificationsData, ...certificationsData, ...certificationsData, ...certificationsData];

  // SEAMLESS INFINITE AUTO-SCROLL LOGIC
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isHovered) {
        // Unti-unting pag-usad para sobrang smooth (0.5 pixels per frame)
        scrollContainer.scrollLeft += 0.5;

        // Kung umabot na sa kalagitnaan (sa simula ng 3rd clone), ibalik sa simula (1st clone) nang patago
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  // MANUAL NAVIGATION (Na may seamless jump fallback)
  const scrollLeft = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft <= 0) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
      }
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="certifications" className="py-32 overflow-hidden relative w-full">
      
      <div className="max-w-5xl mx-auto px-6 w-full mb-16 relative z-10">
        <h2 className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-3 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-blue-600 rounded-full"></span>
          Achievements
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Certifications</span>
        </h3>
        <p className="text-gray-500 text-lg mt-6 max-w-2xl leading-relaxed">
          A showcase of my continuous learning and professional development. Click any card to view the official document.
        </p>
      </div>

      {/* --- CAROUSEL WRAPPER --- */}
      <div 
        className="relative w-full group py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating Manual Buttons */}
        <button 
          onClick={scrollLeft}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-gray-700 hover:text-blue-600 hover:scale-110 hover:shadow-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-label="Previous"
        >
          <FaChevronLeft className="text-lg md:text-xl pr-1" />
        </button>

        <button 
          onClick={scrollRight}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-gray-700 hover:text-blue-600 hover:scale-110 hover:shadow-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-label="Next"
        >
          <FaChevronRight className="text-lg md:text-xl pl-1" />
        </button>

        {/* Sliding Track (Edge-to-Edge with Smooth Fade) */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden gap-6 md:gap-8 px-6 md:px-10 pb-12 pt-4 items-stretch"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          {loopingCerts.map((cert, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(cert.image)}
              // DITO INAPPLY YUNG MOBILE FIX (w-[280px] sa mobile, w-[360px] sa desktop)
              className="w-[280px] md:w-[360px] shrink-0 cursor-pointer group h-auto"
            >
              {/* PREMIUM GLASSMORPHISM CARD DESIGN */}
              <div className="relative bg-white/70 backdrop-blur-lg rounded-[2rem] p-6 md:p-8 h-full flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white/50 transition-all duration-500 group-hover:-translate-y-3 overflow-hidden">
                
                {/* Subtle Inner Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Section: Icon & Year Badge */}
                  <div className="flex justify-between items-start mb-6 md:mb-8">
                    {/* Premium Gradient Icon Container */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                      <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Elegant Date Badge */}
                    <span className="px-3 py-1 bg-white/80 border border-gray-100 text-gray-500 text-xs font-semibold rounded-full tracking-wide">
                      {cert.date}
                    </span>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-grow">
                    <p className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-blue-600 mb-2">
                      {cert.issuer}
                    </p>
                    <h3 className="text-lg md:text-xl font-extrabold text-gray-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  </div>

                  {/* Elegant View Button */}
                  <div className="mt-6 md:mt-8 pt-4 md:pt-5 border-t border-gray-200/50 flex items-center justify-between">
                    <span className="text-xs md:text-sm font-semibold text-gray-400 group-hover:text-blue-600 transition-colors">
                      View Document
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-blue-50 transition-colors shadow-sm">
                      <FaChevronRight className="text-gray-400 group-hover:text-blue-600 text-xs" />
                    </span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- IMAGE POPUP MODAL (Glassmorphism Modal) --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/40 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-white p-2 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/20"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-md hover:bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              ✕
            </button>
            <div className="relative w-full h-[80vh]">
              <Image 
                src={selectedImage} 
                alt="Certificate" 
                fill 
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}