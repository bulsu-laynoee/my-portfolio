import { projectsData } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-screen">
      {/* Back Button */}
      <Link 
        href="/#projects" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Portfolio
      </Link>

      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{project.title}</h1>
      
      {/* Live Site Button (Lilitaw lang kapag may liveUrl) */}
      {project.liveUrl && (
        <a 
          href={project.liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors mb-6"
        >
          Visit Live Site
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      )}
      
      <div className="flex flex-wrap gap-2 mb-10">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg text-sm">
            {tech}
          </span>
        ))}
      </div>

      {/* Main Image */}
      <img 
        src={project.image} 
        alt={`${project.title} Cover`} 
        className="w-full h-auto rounded-2xl shadow-md mb-12 border border-gray-200"
      />

      {/* Full Description */}
      <div className="prose prose-lg max-w-none text-gray-700 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Project</h2>
        <p className="leading-relaxed whitespace-pre-wrap">{project.fullDescription}</p>
      </div>

      {/* Image Gallery */}
      {project.gallery && project.gallery.length > 1 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`${project.title} Screenshot ${index + 1}`} 
                className="w-full h-auto rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}