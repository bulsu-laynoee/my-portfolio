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
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 border-t border-gray-200/60">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">About Me</h2>
        
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            I am a 4th-year Information Technology student with a strong passion for full-stack web development. I enjoy bridging the gap between elegant frontend interfaces and robust backend architectures.
          </p>
          <p>
            Beyond writing code, I have experience in network administration, server management, and automated quality assurance testing. I'm always looking for ways to optimize workflows and build scalable, secure systems.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill.name} 
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 shadow-sm hover:border-blue-300 transition-colors"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}