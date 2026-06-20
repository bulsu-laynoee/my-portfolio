import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    // TINANGGAL NATIN ANG max-w-5xl DITO PARA EDGE-TO-EDGE NA ANG BACKGROUNDS
    <div className="w-full flex flex-col">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}