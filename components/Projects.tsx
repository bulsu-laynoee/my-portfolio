"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaCode } from "react-icons/fa";

type Project = typeof projectsData[0];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayImages = activeProject 
    ? (activeProject.gallery && activeProject.gallery.length > 0 ? activeProject.gallery : [activeProject.image]) 
    : [];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (displayImages.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (displayImages.length > 1) {
      setCurrentImageIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
    }
  };

  const openModal = (project: Project) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-24 md:py-32 border-t border-gray-200/50 dark:border-gray-800/50 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold tracking-widest uppercase text-blue-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-600 dark:bg-cyan-400 rounded-full"></span>
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Projects</span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg mt-4 md:mt-6 max-w-2xl leading-relaxed">
            A collection of systems I've built, managed, and deployed. Click on any project to explore the full details, tech stack, and gallery.
          </p>
        </div>

        {/* ==========================================
            SPLIT UI: MAIN CARDS
        ========================================== */}
        <div>
          
          {/* 1. MOBILE CARDS */}
          <div className="md:hidden flex flex-col gap-8">
            {projectsData.map((project) => (
              <div 
                key={project.slug} 
                onClick={() => openModal(project)}
                className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none border border-transparent dark:border-gray-800 overflow-hidden active:scale-[0.98] transition-all"
              >
                <div className="relative w-full h-56 bg-slate-100 dark:bg-slate-800">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  <span className="absolute top-4 left-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-extrabold text-blue-600 dark:text-cyan-400 uppercase tracking-widest shadow-sm">
                    {project.tags[0]}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-blue-600 dark:text-cyan-400">
                    <span className="text-xs font-bold uppercase tracking-wider">Explore Project</span>
                    <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center">
                      <FaChevronRight className="text-[10px]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2. DESKTOP CARDS */}
          <div className="hidden md:grid md:grid-cols-2 gap-10">
            {projectsData.map((project) => (
              <div 
                key={`desktop-${project.slug}`} 
                onClick={() => openModal(project)}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-gray-100 dark:border-gray-800 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col group overflow-hidden cursor-pointer hover:-translate-y-2"
              >
                <div className="relative w-full h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 dark:group-hover:bg-slate-950/60 transition-colors duration-300 flex items-center justify-center">
                    <span className="px-6 py-3 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm text-gray-900 dark:text-white font-bold rounded-full shadow-lg transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      View Project Details
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative z-10">
                    <div className="flex justify-between items-start mb-4 gap-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1.5 bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-gray-700 text-blue-600 dark:text-cyan-400 text-[10px] font-extrabold uppercase tracking-widest rounded-full whitespace-nowrap">
                        {project.tags[0]}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 flex-grow leading-relaxed text-sm">
                      {project.shortDescription}
                    </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ==========================================
          SPLIT UI: MODAL POPUP (Gagawa ng z-[1000])
      ========================================== */}
      {activeProject && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-900/90 md:bg-gray-900/80 backdrop-blur-md md:p-10" onClick={closeModal}>
          
          {/* 1. MOBILE MODAL (100% Fixed Native Sub-Page Layout) */}
          <div className="md:hidden w-full h-full bg-white dark:bg-slate-950 flex flex-col overflow-hidden transition-colors" onClick={(e) => e.stopPropagation()}>
            
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-900 flex-shrink-0">
              <h3 className="font-extrabold text-lg text-gray-900 dark:text-white truncate max-w-[75%]">
                {activeProject.title}
              </h3>
              <button 
                onClick={closeModal} 
                className="bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-900 dark:text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm active:scale-90 transition-all"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-white dark:bg-slate-950">
              <div className="relative w-full h-64 bg-slate-50 dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800">
                <Image src={displayImages[currentImageIndex]} alt={activeProject.title} fill className="object-contain p-4" />
                
                {displayImages.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/70 dark:bg-slate-800/70 text-gray-900 dark:text-white rounded-full shadow-md backdrop-blur-sm">
                      <FaChevronLeft className="pr-0.5 text-xs" />
                    </button>
                    <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/70 dark:bg-slate-800/70 text-gray-900 dark:text-white rounded-full shadow-md backdrop-blur-sm">
                      <FaChevronRight className="pl-0.5 text-xs" />
                    </button>
                    <div className="absolute bottom-4 w-full flex justify-center gap-1.5">
                      {displayImages.map((_, idx) => (
                        <span key={idx} className={`h-1.5 rounded-full transition-all ${idx === currentImageIndex ? "w-6 bg-blue-600 dark:bg-cyan-500" : "w-1.5 bg-gray-300 dark:bg-gray-600"}`}></span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 pb-24">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {activeProject.liveUrl && (
                  <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-3.5 mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold rounded-xl shadow-md">
                    Visit Live Site <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}

                <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-2">Project Overview</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{activeProject.fullDescription}</p>

                <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
                  <FaCode className="text-blue-500 dark:text-cyan-400" /> Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-blue-50/50 dark:bg-blue-900/20 border border-blue-100/50 dark:border-blue-800/30 text-blue-700 dark:text-cyan-400 text-xs font-semibold rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. DESKTOP MODAL (Premium Split Screen View) */}
          <div className="hidden md:flex relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-transparent dark:ring-white/10" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md hover:bg-red-500 dark:hover:bg-red-500 text-gray-900 dark:text-white hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md">
              ✕
            </button>

            <div className="w-1/2 h-auto relative bg-slate-100 dark:bg-slate-800/50 group/gallery flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <Image src={displayImages[currentImageIndex]} alt={`${activeProject.title} screenshot`} fill className="object-contain p-8" />
              </div>
              {displayImages.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-600 text-gray-800 dark:text-white shadow-lg rounded-full transition-all opacity-0 group-hover/gallery:opacity-100 backdrop-blur-sm">
                    <FaChevronLeft className="pr-0.5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-600 text-gray-800 dark:text-white shadow-lg rounded-full transition-all opacity-0 group-hover/gallery:opacity-100 backdrop-blur-sm">
                    <FaChevronRight className="pl-0.5" />
                  </button>
                  <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2">
                    {displayImages.map((_, idx) => (
                      <span key={idx} className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "w-8 bg-blue-600 dark:bg-cyan-500 shadow-md" : "w-2 bg-gray-300/80 dark:bg-gray-600/80"}`}></span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="w-1/2 flex flex-col h-full overflow-y-auto bg-white dark:bg-slate-900 p-12 lg:p-14">
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="text-xs font-bold px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-full">{tag}</span>
                  ))}
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">{activeProject.title}</h2>
                {activeProject.liveUrl && (
                  <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-full shadow-lg hover:-translate-y-0.5 transition-all w-fit">
                    Visit Live Site <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
              <div className="mb-10">
                <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3">Project Overview</h4>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{activeProject.fullDescription}</p>
              </div>
              <div className="mt-auto pt-8 border-t border-gray-100 dark:border-gray-800">
                <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-4 flex items-center gap-2">
                  <FaCode className="text-blue-500 dark:text-cyan-400 text-lg" /> Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-blue-50/50 dark:bg-blue-900/20 border border-blue-100/50 dark:border-blue-800/30 text-blue-700 dark:text-cyan-400 text-sm font-semibold rounded-lg">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </section>
  );
}