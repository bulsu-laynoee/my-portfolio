import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
    </div>
  );
}