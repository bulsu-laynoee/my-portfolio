export default function Experience() {
  const experiences = [
    {
        
      role: "Platform Manager / Developer",
      company: "Luxury Level",
      date: "May 2025 - Present",
      description: "Managed and optimized the e-commerce platform. Handled the migration to Vercel Pro, integrated Cloudflare R2 storage, and prioritized secure Supabase client-side operations.",
    },
    {
      role: "Software Developer Intern",
      company: "Zwart Trading OPC - Sole Avenue",
      date: "Jan 2026 - March 2026",
      description: "Developed an automated inventory and notification system utilizing Google Apps Script and Google Sheets. Implemented automated email triggers for customer order updates such as 'Arrived' or 'Cancelled'.",
    },
    {
      role: "Technical Support",
      company: "Malolos City Hall - CIT Department",
      date: "July 2024 - Sept 2024",
      description: "Developed an automated inventory and notification system utilizing Google Apps Script and Google Sheets. Implemented automated email triggers for customer order updates such as 'Arrived' or 'Cancelled'.",
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-24 border-t border-gray-200/60">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Work Experience</h2>
        <p className="text-gray-600 mb-12 text-lg">My professional journey and internships.</p>

        <div className="space-y-8 border-l-2 border-blue-100 ml-3 pl-8 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-white border-4 border-blue-100 rounded-full group-hover:border-blue-600 transition-colors duration-300"></div>
              
              <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-1 mb-4">
                  <span className="text-blue-600 font-semibold">{exp.company}</span>
                  <span className="text-gray-500 text-sm mt-1 sm:mt-0 font-medium bg-gray-100 px-3 py-1 rounded-full w-fit">
                    {exp.date}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}