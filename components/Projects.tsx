"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaCode } from "react-icons/fa";

type Project = typeof projectsData[0];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gamitin ang gallery, pero kung walang laman, gamitin ang main image bilang fallback
  const displayImages = activeProject 
    ? (activeProject.gallery.length > 0 ? activeProject.gallery : [activeProject.image]) 
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
    // Para hindi mag-scroll ang background kapag bukas ang modal
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-32 border-t border-gray-200/50 relative">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-600 rounded-full"></span>
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Projects</span>
          </h3>
          <p className="text-gray-500 text-lg mt-6 max-w-2xl leading-relaxed">
            A collection of systems I've built, managed, and deployed. Click on any project to explore the full details, tech stack, and gallery.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projectsData.map((project) => (
            <div 
              key={project.slug} 
              onClick={() => openModal(project)}
              className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col group overflow-hidden cursor-pointer hover:-translate-y-2"
            >
              {/* Main Card Image */}
              <div className="relative w-full h-64 overflow-hidden bg-slate-100">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="px-6 py-3 bg-white/95 backdrop-blur-sm text-gray-900 font-bold rounded-full shadow-lg transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    View Project Details
                  </span>
                </div>
              </div>
              
              {/* Card Text Content */}
              <div className="p-8 flex flex-col flex-grow relative z-10">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    {/* Unang tag bilang platform indicator */}
                    <span className="px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-extrabold uppercase tracking-widest rounded-full whitespace-nowrap">
                      {project.tags[0]}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                    {project.shortDescription}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SPLIT-SCREEN PREMIUM MODAL --- */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/60 backdrop-blur-md p-4 md:p-6 lg:p-10 animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-6xl max-h-[95vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row transform transition-all"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 bg-white/50 backdrop-blur-md hover:bg-red-500 text-gray-900 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
            >
              ✕
            </button>

            {/* LEFT COLUMN: Gallery View */}
            <div className="w-full lg:w-1/2 h-64 lg:h-auto relative bg-slate-100 group/gallery">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <Image 
                  src={displayImages[currentImageIndex]} 
                  alt={`${activeProject.title} screenshot`} 
                  fill 
                  className="object-contain p-4 md:p-8"
                />
              </div>

              {/* Gallery Controls (Shows only if multiple images) */}
              {displayImages.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-gray-800 shadow-lg rounded-full transition-all opacity-0 group-hover/gallery:opacity-100"
                  >
                    <FaChevronLeft className="pr-0.5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-gray-800 shadow-lg rounded-full transition-all opacity-0 group-hover/gallery:opacity-100"
                  >
                    <FaChevronRight className="pl-0.5" />
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2">
                    {displayImages.map((_, idx) => (
                      <span 
                        key={idx}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex ? "w-8 bg-blue-600 shadow-md" : "w-2 bg-gray-300/80"
                        }`}
                      ></span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* RIGHT COLUMN: Full Project Details */}
            <div className="w-full lg:w-1/2 flex flex-col h-full overflow-y-auto bg-white p-8 md:p-12 lg:p-14">
              
              {/* Title & Tags */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="text-xs font-bold px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                  {activeProject.title}
                </h2>
                
                {/* Live URL Button (if exists) */}
                {activeProject.liveUrl && (
                  <a 
                    href={activeProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
                  >
                    Visit Live Site <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>

              {/* Full Description */}
              <div className="mb-10">
                <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-3">Project Overview</h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  {activeProject.fullDescription}
                </p>
              </div>

              {/* Tech Stack Used */}
              <div className="mt-auto pt-8 border-t border-gray-100">
                <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4 flex items-center gap-2">
                  <FaCode className="text-blue-500 text-lg" /> Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {activeProject.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 bg-blue-50/50 border border-blue-100/50 text-blue-700 text-sm font-semibold rounded-lg"
                    >
                      {tech}
                    </span>
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