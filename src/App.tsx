import { CursorTrail } from "@/components/portfolio/Background";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Nav, SocialRail } from "@/components/portfolio/Nav";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CursorTrail />
      <Nav />
      <SocialRail />
      <Hero />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 dot-bg opacity-50" />
        <div className="relative">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}
