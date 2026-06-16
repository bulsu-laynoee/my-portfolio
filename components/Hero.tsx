import Link from "next/link";

export default function Hero() {
  return (
    // Pinalitan ko ang pt-16 ng pt-28 para iwas sa navbar sa mobile
    <section id="home" className="min-h-screen flex flex-col justify-center items-start pt-28 md:pt-16">

      {/* Pinaliit ang font sa mobile (text-4xl) para hindi masira sa maliliit na screen */}
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Edward Layno</span>
        <span className="text-cyan-500 font-light ml-1 animate-pulse">|</span>
      </h1>
      
      <p className="text-base md:text-lg text-gray-600 max-w-2xl mt-6 leading-relaxed">
        I specialize in providing reliable technical support, resolving hardware and software issues, and performing network troubleshooting, with a complementary passion for building modern web applications.
      </p>
      
      {/* Ginawang full-width ang buttons sa mobile (w-full sm:w-auto) */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
        <Link href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30 text-center w-full sm:w-auto">
          View My Work
        </Link>
        <Link href="#about" className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-3.5 rounded-lg font-medium transition-colors shadow-sm text-center w-full sm:w-auto">
          More About Me
        </Link>
      </div>
    </section>
  );
}