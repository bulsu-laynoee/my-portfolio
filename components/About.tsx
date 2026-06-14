import Image from "next/image";
import { FaReact, FaNodeJs, FaLaravel, FaUbuntu } from "react-icons/fa";
import { SiNextdotjs, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React", icon: <FaReact className="text-[#61DAFB] text-lg" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-lg" /> }, 
    { name: "Laravel", icon: <FaLaravel className="text-[#FF2D20] text-lg" /> },
    { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E] text-lg" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-lg" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-lg" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933] text-lg" /> },
    { name: "Ubuntu Server", icon: <FaUbuntu className="text-[#E95420] text-lg" /> }
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 border-t border-gray-200/60 relative">
      
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT COLUMN: LARAWAN --- */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-blue-500/20 ring-4 ring-blue-100/50">
                <Image
                  src="/me.jpg" 
                  alt="Edward Layno"
                  fill
                  priority 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: TEXT & SKILLS --- */}
          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-1 tracking-tight text-gray-900 flex items-center gap-3">
              <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
              About Me
            </h2>
            <p className="text-blue-600 font-semibold mb-8 text-lg">IT Support & Web Developer</p>
            
            {/* BAGONG DESCRIPTION MO */}
            <div className="prose prose-lg text-gray-600 space-y-6 leading-relaxed max-w-none">
              <p>
                I am a recent <strong className="text-gray-800">Information Technology graduate</strong> from <strong className="text-gray-800">Bulacan State University</strong> with a foundation in technical support. I specialize in diagnosing computer hardware issues, resolving software complications, and performing basic network troubleshooting to ensure smooth and efficient IT operations.
              </p>
              <p>
                Alongside my technical support expertise, I am also a capable web developer. I enjoy building responsive and user-friendly applications using modern technologies like React and Next.js, allowing me to seamlessly bridge the gap between IT infrastructure and digital solutions.
              </p>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 tracking-tight flex items-center gap-2">
                <span className="text-blue-600"></span> Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill.name} 
                    className="flex items-center gap-2.5 px-5 py-2.5 bg-white border border-gray-100 rounded-full text-sm font-semibold text-gray-700 shadow-sm hover:border-blue-300 hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300"
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