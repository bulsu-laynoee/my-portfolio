"use client";

import { useState } from "react";
import Image from "next/image";
import { FaReact, FaNodeJs, FaLaravel, FaNetworkWired, FaDesktop, FaWindows, FaProjectDiagram } from "react-icons/fa";
import { SiNextdotjs, SiSupabase, SiTailwindcss, SiTypescript, SiVirtualbox } from "react-icons/si";

export default function About() {
  const [activeTab, setActiveTab] = useState<"it" | "web">("it");

  const itSkills = [
    { name: "Hardware Diagnostics", icon: <FaDesktop className="text-gray-700 dark:text-gray-300 text-lg" /> },
    { name: "Network Troubleshooting", icon: <FaNetworkWired className="text-blue-600 dark:text-cyan-400 text-lg" /> },
    { name: "Windows Server", icon: <FaWindows className="text-[#00A4EF] text-lg" /> },
    { name: "Cisco Packet Tracer", icon: <FaProjectDiagram className="text-[#1BA0D7] text-lg" /> },
    { name: "VirtualBox", icon: <SiVirtualbox className="text-[#183A61] dark:text-[#5fa2ec] text-lg" /> },
  ];

  const webSkills = [
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-lg" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB] text-lg" /> },
    { name: "Laravel", icon: <FaLaravel className="text-[#FF2D20] text-lg" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-lg" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-lg" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933] text-lg" /> },
    { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E] text-lg" /> },
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 border-t border-gray-200/50 dark:border-gray-800/50 relative overflow-hidden transition-colors duration-300">
      
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

      {/* Dark Mode adjusted Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-[100px] pointer-events-none z-0 transition-colors duration-500"></div>
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-cyan-100/40 dark:bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none z-0 transition-colors duration-500"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group animate-float">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-300 dark:from-blue-800 dark:via-cyan-900 dark:to-blue-900 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-pulse"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-[3rem] overflow-hidden border-[6px] border-white dark:border-slate-800 shadow-2xl shadow-blue-500/20 rotate-3 group-hover:rotate-0 transition-all duration-500">
                <Image
                  src="/me.jpg" 
                  alt="Edward Layno"
                  fill
                  priority 
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 dark:from-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 animate-slide-up">
            <h2 className="text-sm font-bold tracking-widest uppercase text-blue-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600 dark:bg-cyan-400 rounded-full"></span>
              Get to know me
            </h2>
            
            <h3 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight text-gray-900 dark:text-white">
              About Me
            </h3>
            
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 space-y-5 leading-relaxed max-w-none">
              <p>
                I am a recent <strong className="text-gray-800 dark:text-gray-200">Information Technology graduate</strong> from <strong className="text-gray-800 dark:text-gray-200">Bulacan State University</strong> with a solid foundation in technical support. I specialize in diagnosing computer hardware issues, resolving software complications, and performing basic network troubleshooting to ensure smooth and efficient IT operations.
              </p>
              <p>
                Alongside my technical support expertise, I am also a capable web developer. I enjoy building responsive and user-friendly applications using modern technologies, allowing me to seamlessly bridge the gap between IT infrastructure and digital solutions.
              </p>
            </div>

            <div className="mt-12 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-2 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
              <div className="flex space-x-2 bg-gray-100/80 dark:bg-slate-800/80 p-1.5 rounded-xl mb-6">
                <button 
                  onClick={() => setActiveTab("it")}
                  className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${
                    activeTab === "it" 
                      ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-cyan-400 shadow-sm" 
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-slate-700/50"
                  }`}
                >
                  IT & Network Support
                </button>
                <button 
                  onClick={() => setActiveTab("web")}
                  className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${
                    activeTab === "web" 
                      ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-cyan-400 shadow-sm" 
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-slate-700/50"
                  }`}
                >
                  Web Development
                </button>
              </div>

              <div className="flex flex-wrap gap-3 p-2 min-h-[120px] items-start">
                {(activeTab === "it" ? itSkills : webSkills).map((skill, index) => (
                  <span 
                    key={skill.name} 
                    className="flex items-center gap-2.5 px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 shadow-sm hover:border-blue-400 dark:hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
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