export default function About() {
  const skills = [
    "React", "Next.js", "Laravel", "Supabase", 
    "Tailwind CSS", "TypeScript", "Node.js", "Ubuntu Server"
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">About Me</h1>
      
      <div className="prose prose-lg text-gray-600 space-y-6">
        <p>
          I am a 4th-year Information Technology student with a strong passion for full-stack web development. I enjoy bridging the gap between elegant frontend interfaces and robust backend architectures.
        </p>
        <p>
          Beyond writing code, I have experience in network administration, server management, and automated quality assurance testing. I'm always looking for ways to optimize workflows and build scalable, secure systems.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 shadow-sm hover:border-blue-300 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}