import { createFileRoute } from "@tanstack/react-router";
import { Nav, SocialRail } from "@/components/portfolio/Nav";
import { CursorTrail } from "@/components/portfolio/Background";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const DEV_NAME = import.meta.env.VITE_DEV_NAME;
const DEV_COMPANY = import.meta.env.VITE_DEV_COMPANY;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${DEV_NAME} · Full-Stack Software Engineer` },
      {
        name: "description",
        content: `Software Engineer with 3+ years building enterprise apps with Java, Spring Boot, Angular, Apache Spark, Databricks, and Azure. 11 TB+ monthly data at ${DEV_COMPANY}.`,
      },
      { property: "og:title", content: `${DEV_NAME} · Full-Stack Software Engineer` },
      {
        property: "og:description",
        content: `Building scalable enterprise applications with Java, Spring Boot, Angular, and Apache Spark on Azure Databricks for ${DEV_COMPANY}.`,
      },
    ],
  }),
  component: Index,
});

function Index() {
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
