import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-28 md:pt-16 relative z-10 transition-colors duration-300">
      
      {/* CUSTOM ANIMATION PARA SA MABILIS NA CURSOR BLINKING */}
      <style>{`
        @keyframes fastBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-fast-cursor {
          /* 0.8s is faster than pulse, step-start makes it snappy like a real terminal/text cursor */
          animation: fastBlink 0.8s step-start infinite;
        }
      `}</style>

      {/* CONTAINER FIX PARA SA MOBILE: 
        1. items-center text-center = Naka-center sa Mobile
        2. md:items-start md:text-left = Bumabalik sa Kaliwa sa Desktop
      */}
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center text-center md:items-start md:text-left relative z-10">
        
        {/* Responsive font size na naka-adjust sa mobile numbering scheme natin */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Edward Layno</span>
          
          {/* ITONG CURSOR AY MABILIS NA NGAYONG KUMIKIPOT (Snappy blinking) */}
          <span className="text-cyan-500 font-light ml-1 animate-fast-cursor">|</span>
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mt-6 leading-relaxed">
          I specialize in providing reliable technical support, resolving hardware and software issues, and performing network troubleshooting, with a complementary passion for building modern web applications.
        </p>
        
        {/* Buttons: Naka-center din sa mobile, stacked vertically */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
          <Link href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 text-center w-full sm:w-auto active:scale-95 hover:-translate-y-0.5">
            View My Work
          </Link>
          
          <Link href="#about" className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-200 px-8 py-3.5 rounded-xl font-bold transition-all shadow-sm text-center w-full sm:w-auto active:scale-95 hover:-translate-y-0.5">
            More About Me
          </Link>
        </div>

      </div>
    </section>
  );
}