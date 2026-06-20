"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { certificationsData } from "@/data/certification";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Ginagamit lang natin ito para sa Desktop Carousel para hindi maputol
  const loopingCerts = [...certificationsData, ...certificationsData, ...certificationsData, ...certificationsData];

  // SEAMLESS INFINITE AUTO-SCROLL LOGIC (Pang-Desktop lang)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isHovered && window.innerWidth >= 768) { // Tumatakbo lang sa desktop
        scrollContainer.scrollLeft += 0.5;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

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
    <section id="certifications" className="py-24 md:py-32 overflow-hidden relative w-full border-t border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto px-6 w-full mb-12 md:mb-16 relative z-10">
        <h2 className="text-xs md:text-sm font-bold tracking-widest uppercase text-blue-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-blue-600 dark:bg-cyan-400 rounded-full"></span>
          Achievements
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Certifications</span>
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg mt-4 md:mt-6 max-w-2xl leading-relaxed">
          A showcase of my continuous learning and professional development. Click any card to view the official document.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* =========================================
            1. MOBILE UI (Vertical App-Style Cards)
            ========================================= */}
        <div className="md:hidden flex flex-col gap-6">
          {certificationsData.map((cert, index) => (
            <div 
              key={`mobile-${index}`}
              onClick={() => setSelectedImage(cert.image)}
              className="w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-gray-100 dark:border-gray-800 shadow-sm rounded-3xl p-6 flex flex-col active:scale-[0.98] transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-[1.25rem] flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-400 shadow-md">
                  <div className="w-[90%] h-[90%] bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-blue-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-blue-600 dark:text-cyan-400 font-extrabold text-[10px] tracking-widest uppercase mb-1">{cert.issuer}</p>
                  <h3 className="font-extrabold text-lg text-gray-900 dark:text-white leading-tight">{cert.title}</h3>
                </div>
              </div>
              
              <span className="w-fit px-3 py-1 bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-gray-700 text-gray-500 dark:text-gray-300 text-[10px] font-bold uppercase rounded-full mb-3 transition-colors">
                {cert.date}
              </span>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                {cert.description}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-500">
                  View Document
                </span>
                <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                  <FaChevronRight className="text-[10px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          2. DESKTOP UI (Smooth Scrolling Carousel)
          ========================================= */}
      <div 
        className="hidden md:block relative w-full group py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          onClick={scrollLeft}
          className="absolute left-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-gray-200/80 dark:border-gray-700 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-110 hover:shadow-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <FaChevronLeft className="text-xl pr-1" />
        </button>

        <button 
          onClick={scrollRight}
          className="absolute right-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-gray-200/80 dark:border-gray-700 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-110 hover:shadow-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <FaChevronRight className="text-xl pl-1" />
        </button>

        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden gap-8 px-10 pb-12 pt-4 items-stretch"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          {loopingCerts.map((cert, index) => (
            <div 
              key={`desktop-${index}`}
              onClick={() => setSelectedImage(cert.image)}
              className="w-[360px] shrink-0 cursor-pointer group h-auto"
            >
              <div className="relative bg-white/70 dark:bg-slate-900/80 backdrop-blur-lg rounded-[2rem] p-8 h-full flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white/50 dark:border-slate-800 transition-all duration-500 group-hover:-translate-y-3 overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 dark:from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                      <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[15px] flex items-center justify-center transition-colors">
                        <svg className="w-6 h-6 text-blue-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-white/80 dark:bg-slate-800 border border-gray-100 dark:border-gray-700 text-gray-500 dark:text-gray-300 text-xs font-semibold rounded-full tracking-wide transition-colors">
                      {cert.date}
                    </span>
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-[11px] font-bold tracking-widest uppercase text-blue-600 dark:text-cyan-400 mb-2">{cert.issuer}</p>
                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{cert.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">{cert.description}</p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-gray-200/50 dark:border-gray-800 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">View Document</span>
                    <span className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-slate-700 transition-colors shadow-sm">
                      <FaChevronRight className="text-gray-400 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 text-xs" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          3. IMAGE POPUP MODAL (z-[1000])
          ========================================= */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-900/90 md:bg-gray-900/80 backdrop-blur-md md:p-10 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* MOBILE MODAL: Full Screen Dark Mode Header */}
          <div className="md:hidden w-full h-full bg-black flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center px-6 py-4 bg-gray-900 border-b border-gray-800 flex-shrink-0">
              <h3 className="font-extrabold text-lg text-white">Document</h3>
              <button onClick={() => setSelectedImage(null)} className="bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                ✕
              </button>
            </div>
            <div className="flex-1 relative w-full h-full p-4">
              <Image src={selectedImage} alt="Certificate" fill className="object-contain" />
            </div>
          </div>

          {/* DESKTOP MODAL: Floating Card */}
          <div className="hidden md:block relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-slate-900 p-2 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/20 dark:ring-white/10" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-md hover:bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              ✕
            </button>
            <div className="relative w-full h-[80vh]">
              <Image src={selectedImage} alt="Certificate" fill className="object-contain rounded-2xl" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}