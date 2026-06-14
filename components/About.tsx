"use client";

import { useState } from "react";
import Image from "next/image";
import { FaReact, FaNodeJs, FaLaravel, FaUbuntu, FaNetworkWired, FaServer, FaDesktop } from "react-icons/fa";
import { SiNextdotjs, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function About() {
  // Gumawa tayo ng state para sa Interactive Tabs
  const [activeTab, setActiveTab] = useState<"it" | "web">("it");

  // Hinati natin ang skills para mas emphasize yung IT Support focus mo
  const itSkills = [
    { name: "Hardware Diagnostics", icon: <FaDesktop className="text-gray-700 text-lg" /> },
    { name: "Network Troubleshooting", icon: <FaNetworkWired className="text-blue-600 text-lg" /> },
    { name: "Ubuntu Server", icon: <FaUbuntu className="text-[#E95420] text-lg" /> },
    { name: "Server Administration", icon: <FaServer className="text-gray-800 text-lg" /> },
  ];

  const webSkills = [
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-lg" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB] text-lg" /> },
    { name: "Laravel", icon: <FaLaravel className="text-[#FF2D20] text-lg" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-lg" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-lg" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933] text-lg" /> },
    { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E] text-lg" /> },
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 border-t border-gray-200/50 relative overflow-hidden">
      
      {/* INJECTED CUSTOM ANIMATIONS PARA SURE NA GAGANA AGAD */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slideUpFade 0.6s ease-out forwards;
        }
      `}</style>

      {/* Decorative Background Glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-cyan-100/40 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* --- LEFT COLUMN: ANIMATED PICTURE --- */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group animate-float">
              {/* Spinning Glow Effect sa likod ng picture */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-300 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-pulse"></div>
              
              {/* Premium Image Frame */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-[3rem] overflow-hidden border-[6px] border-white shadow-2xl shadow-blue-500/20 rotate-3 group-hover:rotate-0 transition-all duration-500">
                <Image
                  src="/me.jpg" 
                  alt="Edward Layno"
                  fill
                  priority 
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
                {/* Overlay highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: TEXT & INTERACTIVE SKILLS --- */}
          <div className="lg:col-span-7 animate-slide-up">
            
            <h2 className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600 rounded-full"></span>
              Get to know me
            </h2>
            
            <h3 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight text-gray-900">
              About Me
            </h3>
            
            <div className="prose prose-lg text-gray-600 space-y-5 leading-relaxed max-w-none">
              <p>
                I am a recent <strong className="text-gray-800">Information Technology graduate</strong> from <strong className="text-gray-800">Bulacan State University</strong> with a solid foundation in technical support. I specialize in diagnosing computer hardware issues, resolving software complications, and performing basic network troubleshooting to ensure smooth and efficient IT operations.
              </p>
              <p>
                Alongside my technical support expertise, I am also a capable web developer. I enjoy building responsive and user-friendly applications using modern technologies, allowing me to seamlessly bridge the gap between IT infrastructure and digital solutions.
              </p>
            </div>

            {/* --- INTERACTIVE TABS PARA SA SKILLS --- */}
            <div className="mt-12 bg-white/60 backdrop-blur-sm p-2 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              
              {/* Tab Buttons */}
              <div className="flex space-x-2 bg-gray-100/80 p-1.5 rounded-xl mb-6">
                <button 
                  onClick={() => setActiveTab("it")}
                  className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${
                    activeTab === "it" 
                      ? "bg-white text-blue-600 shadow-sm" 
                      : "text-gray-500 hover:text-gray-800 hover:bg-white/50"
                  }`}
                >
                  IT & Network Support
                </button>
                <button 
                  onClick={() => setActiveTab("web")}
                  className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${
                    activeTab === "web" 
                      ? "bg-white text-blue-600 shadow-sm" 
                      : "text-gray-500 hover:text-gray-800 hover:bg-white/50"
                  }`}
                >
                  Web Development
                </button>
              </div>

              {/* Dynamic Skills Display based on active tab */}
              <div className="flex flex-wrap gap-3 p-2 min-h-[120px] items-start">
                {(activeTab === "it" ? itSkills : webSkills).map((skill, index) => (
                  <span 
                    key={skill.name} 
                    className="flex items-center gap-2.5 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 shadow-sm hover:border-blue-400 hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }} // Staggered appearance
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}