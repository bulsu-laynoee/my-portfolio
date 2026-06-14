export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      description: "Validated overall understanding of the AWS Cloud platform, covering basic cloud concepts and security.",
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Coursera",
      date: "2024",
      description: "Comprehensive certification covering React, UI/UX principles, and modern front-end web development practices.",
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Certifications</h1>
      <p className="text-gray-600 mb-12 text-lg">Professional training and continuous learning.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-5"
          >
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{cert.title}</h2>
              <p className="text-blue-600 font-semibold text-sm mb-3">
                {cert.issuer} <span className="text-gray-400 font-normal mx-1">•</span> {cert.date}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}