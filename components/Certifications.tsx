export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      image: "/images/aws-cert.png", // <--- Replace with your actual image filename
      description: "Validated overall understanding of the AWS Cloud platform, covering basic cloud concepts and security.",
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Coursera",
      date: "2024",
      image: "/images/meta-cert.png", // <--- Replace with your actual image filename
      description: "Comprehensive certification covering React, UI/UX principles, and modern front-end web development practices.",
    }
  ];

  return (
    <section id="certifications" className="min-h-[80vh] flex flex-col justify-center py-24 border-t border-gray-200/60">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Certifications</h2>
      <p className="text-gray-600 mb-12 text-lg">Professional training and continuous learning. Click to view certificates.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          /* Clickable Card wrapping the entire content */
          <a 
            key={index} 
            href={cert.image} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block group h-full"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-5 h-full relative overflow-hidden">
                
                {/* Certification Icon */}
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600 flex-shrink-0 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                </div>
                
                {/* Certificate Details */}
                <div className="flex-grow pr-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 transition-colors group-hover:text-blue-600">{cert.title}</h3>
                    <p className="text-blue-600 font-semibold text-sm mb-3">
                        {cert.issuer} <span className="text-gray-400 font-normal mx-1">•</span> {cert.date}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {cert.description}
                    </p>
                    
                    {/* Hover Icon to indicate it's an external link */}
                    <div className="absolute top-6 right-6 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </div>
                </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}