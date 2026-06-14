// components/Projects.tsx
import Link from "next/link";
import { projectsData } from "@/data/projects"; // Kunin ang data dito

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-24 border-t border-gray-200/60">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">My Projects</h2>
      <p className="text-gray-600 mb-12 text-lg">A collection of things I've built, managed, and deployed. Click on a project to see full details.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <Link 
            href={`/projects/${project.slug}`} 
            key={project.slug} 
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden cursor-pointer"
          >
            {/* Project Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-56 object-cover border-b border-gray-200 transition-transform duration-500 group-hover:scale-105" 
            />
            
            <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-bold px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}