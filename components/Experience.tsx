"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBriefcase, FaCode, FaTools, FaChevronRight, FaChevronLeft, FaCameraRetro } from "react-icons/fa";

export default function Experience() {
  const [activeExp, setActiveExp] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ito yung exact data na ginawa mo na may kumpletong pictures
  const experiences = [
    {
      role: "Freelance Web Developer",
      company: "Luxury Level Kuwait (Remote)",
      date: "2025 - Present",
      description: "Spearheaded the development and maintenance of an online catalog for premium accessories. Integrated automated web scraping tools to streamline product updates and continuously optimized the platform for speed and reliability.",
      icon: <FaBriefcase className="text-white text-lg md:text-xl" />,
      gradient: "from-blue-600 to-cyan-500",
      gallery: [
        "/experience/luxury-proof1.jpg", 
        "/experience/luxury-proof2.jpg"
      ]
    },
    {
      role: "Intern Developer",
      company: "Zwart Trading OPC - Sole Avenue PH",
      date: "2026",
      description: "Streamlined e-commerce operations by engineering automated business workflows. Built custom scripts utilizing Google Apps Script, managed Shopify store components, and handled rigorous validation testing and database management via Zoho.",
      icon: <FaCode className="text-white text-lg md:text-xl" />,
      gradient: "from-cyan-500 to-blue-500",
      gallery: [
        "/experience/soleavenue1.jpg",
        "/experience/soleavenue2.jpg",
        "/experience/soleavenue3.jpg"
      ]
    },
    {
      role: "Freelance Computer Technician",
      company: "Self-Employed",
      date: "2024 - Present",
      description: "Providing independent technical support focusing on system optimization. Handle hardware diagnostics, component repairs, deep cleaning, and software configurations to maximize PC and laptop performance for clients.",
      icon: <FaTools className="text-white text-lg md:text-xl" />,
      gradient: "from-indigo-400 to-purple-500",
      gallery: [] 
    },
    {
      role: "Office Clerk / IT Support",
      company: "Office of the City Mayor - CIT Office",
      date: "2024",
      description: "Ensured municipal IT infrastructure stability through proactive server room monitoring. Assisted users by troubleshooting network issues, diagnosing hardware faults, and deploying essential software applications.",
      icon: <FaBriefcase className="text-white text-lg md:text-xl" />,
      gradient: "from-blue-400 to-indigo-400",
      gallery: [
        "/experience/cit1.jpg",
        "/experience/cit2.jpg",
        "/experience/cit3.jpg",
        "/experience/cit4.jpg",
        "/experience/cit5.jpg"
      ]
    }
  ];

  const openProof = (exp: any) => {
    setActiveExp(exp);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProof = () => {
    setActiveExp(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeExp && activeExp.gallery.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % activeExp.gallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeExp && activeExp.gallery.length > 1) {
      setCurrentImageIndex((prev) => (prev === 0 ? activeExp.gallery.length - 1 : prev - 1));
    }
  };

  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-24 md:py-32 border-t border-gray-200/50 relative overflow-hidden">
      
      <div className="absolute top-40 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-cyan-100/40 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        
        <div className="mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold tracking-widest uppercase text-blue-600 mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-600 rounded-full"></span>
            Career Path
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Experience</span>
          </h3>
          <p className="text-gray-500 text-base md:text-lg mt-4 md:mt-6 leading-relaxed max-w-2xl">
            My professional journey. Click on any role to view pictures and proof of my work.
          </p>
        </div>

        <div className="relative">
          {/* ITO YUNG TIMELINE LINE (Nakatago sa Mobile, nakikita lang sa Desktop) */}
          <div className="hidden md:block absolute left-[23px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-blue-300 via-gray-200 to-transparent"></div>

          {/* space-y-6 sa mobile para hindi masyadong layo-layo, space-y-12 sa desktop */}
          <div className="space-y-6 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => openProof(exp)}>
                
                {/* =========================================
                    1. MOBILE UI (SARILING DESIGN PANG-PHONE) 
                    ========================================= */}
                <div className="md:hidden w-full bg-white/90 backdrop-blur-md border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-6 flex flex-col active:scale-[0.98] transition-transform">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Icon na nasa loob mismo ng card para hindi kumain ng space sa labas */}
                    <div className={`w-14 h-14 flex-shrink-0 rounded-[1.25rem] flex items-center justify-center bg-gradient-to-br ${exp.gradient} shadow-md`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-gray-900 leading-tight">{exp.role}</h3>
                      <p className="text-blue-600 font-bold text-[10px] tracking-widest uppercase mt-1">{exp.company}</p>
                    </div>
                  </div>
                  
                  <span className="w-fit px-3 py-1 bg-gray-50 border border-gray-100 text-gray-500 text-[10px] font-bold uppercase rounded-full mb-3">
                    {exp.date}
                  </span>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-bold text-gray-400">
                      <FaCameraRetro className="text-sm" /> View Proof
                    </span>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <FaChevronRight className="text-[10px]" />
                    </div>
                  </div>
                </div>

                {/* =========================================
                    2. DESKTOP UI (YUNG PREMIUM TIMELINE MO) 
                    ========================================= */}
                <div className="hidden md:flex items-start relative">
                  <div className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${exp.gradient} shadow-lg shadow-blue-500/30 z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                    {exp.icon}
                  </div>
                  
                  <div className="ml-20 w-full bg-white/70 backdrop-blur-lg border border-white/60 rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="relative z-10 flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <div>
                          <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <span className="inline-flex items-center justify-center px-4 py-1.5 bg-gray-50 border border-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm whitespace-nowrap">
                          {exp.date}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {exp.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between relative z-10">
                      <span className="flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                        <FaCameraRetro className="text-lg" /> View Proof of Work
                      </span>
                      <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <FaChevronRight className="text-gray-400 group-hover:text-blue-600 text-xs" />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- PROOF OF WORK FULL-SCREEN MODAL --- */}
      {activeExp && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-gray-900/90 backdrop-blur-xl p-4 md:p-10 animate-fade-in"
          onClick={closeProof}
        >
          <div 
            className="relative w-full max-w-5xl h-[90vh] md:h-[85vh] bg-black/80 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 md:p-6 bg-black/50 border-b border-white/10 w-full z-20">
              <div>
                <h3 className="text-lg md:text-2xl font-bold text-white drop-shadow-md">
                  {activeExp.company}
                </h3>
                <p className="text-blue-400 text-xs md:text-sm font-semibold tracking-wider uppercase">Proof of Work Gallery</p>
              </div>
              <button 
                onClick={closeProof}
                className="bg-white/10 hover:bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
              >
                ✕
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-grow w-full h-full flex items-center justify-center p-2 md:p-4">
              {activeExp.gallery && activeExp.gallery.length > 0 ? (
                <>
                  <Image 
                    src={activeExp.gallery[currentImageIndex]} 
                    alt={`Proof of work at ${activeExp.company}`} 
                    fill 
                    className="object-contain p-2 md:p-16"
                  />
                  
                  {activeExp.gallery.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 flex items-center justify-center bg-white/10 hover:bg-white/30 text-white backdrop-blur-md rounded-full transition-all border border-white/20"
                      >
                        <FaChevronLeft className="pr-1" />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 flex items-center justify-center bg-white/10 hover:bg-white/30 text-white backdrop-blur-md rounded-full transition-all border border-white/20"
                      >
                        <FaChevronRight className="pl-1" />
                      </button>
                    </>
                  )}
                </>
              ) : (
                 <div className="text-white/50 font-medium flex flex-col items-center gap-3">
                   <FaCameraRetro className="text-4xl opacity-50" />
                   <p>Images coming soon...</p>
                 </div>
              )}
            </div>

            {/* Image Indicators */}
            {activeExp.gallery && activeExp.gallery.length > 1 && (
              <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 z-20">
                {activeExp.gallery.map((_: any, idx: number) => (
                  <span 
                    key={idx}
                    className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? "w-6 md:w-8 bg-blue-500 shadow-lg shadow-blue-500/50" : "w-1.5 md:w-2 bg-white/30"
                    }`}
                  ></span>
                ))}
              </div>
            )}
            
          </div>
        </div>
      )}
    </section>
  );
}