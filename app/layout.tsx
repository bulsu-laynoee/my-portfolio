import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FaFileDownload } from "react-icons/fa"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edward Layno | Portfolio",
  description: "Full-Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 text-gray-900 min-h-screen flex flex-col relative`}>
        
        {/* --- LIVE ANIMATED BACKGROUND --- */}
        <div className="fixed inset-0 z-[-1] overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
          <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Sticky Navbar */}
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center overflow-x-auto">
            
            {/* Logo */}
            <a href="/#home" className="text-2xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-80 transition-opacity flex-shrink-0 mr-8">
              My Portfolio.
            </a>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-8 text-sm font-semibold text-gray-600 whitespace-nowrap">
              <a href="/#home" className="relative group hover:text-blue-600 transition-colors duration-300">
                Home
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              
              <a href="/#about" className="relative group hover:text-blue-600 transition-colors duration-300">
                About
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              
              <a href="/#experience" className="relative group hover:text-blue-600 transition-colors duration-300">
                Experience
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              
              <a href="/#projects" className="relative group hover:text-blue-600 transition-colors duration-300">
                Projects
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              
              <a href="/#certifications" className="relative group hover:text-blue-600 transition-colors duration-300">
                Certifications
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>

              <a href="/#contact" className="relative group hover:text-blue-600 transition-colors duration-300">
                Contact
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              
              <a 
                href="CV-EDWARD-LAYNO-Latest.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative overflow-hidden group flex items-center gap-2 px-6 py-2.5 ml-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                <FaFileDownload className="text-[15px] relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 text-white" />
                <span className="text-sm font-semibold tracking-wide relative z-10">CV</span>
              </a>

            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white/60 backdrop-blur-md border-t border-gray-200/50 py-8 mt-auto">
          <div className="max-w-5xl mx-auto px-6 text-center text-sm font-medium text-gray-500">
            © {new Date().getFullYear()} Edward Layno. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}