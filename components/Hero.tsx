import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start pt-16">

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Edward Layno</span>.
      </h1>
      
      <p className="text-lg text-gray-600 max-w-2xl mt-6 leading-relaxed">
        I specialize in building scalable web applications, robust APIs, and user-friendly interfaces using modern technologies like React, Next.js, and Laravel.
      </p>
      
      <div className="flex space-x-4 mt-10">
        <Link href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30">
          View My Work
        </Link>
        <Link href="#about" className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-3.5 rounded-lg font-medium transition-colors shadow-sm">
          More About Me
        </Link>
      </div>
    </section>
  );
}