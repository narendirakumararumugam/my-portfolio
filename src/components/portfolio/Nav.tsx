import { useEffect, useState } from "react";
import { Terminal, Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

const DEV_NAME = import.meta.env.VITE_DEV_NAME;
const DEV_EMAIL = import.meta.env.VITE_DEV_EMAIL;
const DEV_GITHUB_URL = import.meta.env.VITE_DEV_GITHUB_URL;
const DEV_LINKEDIN_URL = import.meta.env.VITE_DEV_LINKEDIN_URL;

const NAV = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "contact", label: "contact" },
];

export function Nav() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 mx-auto flex justify-center px-4 transition-all ${scrolled ? "" : ""}`}
    >
      <nav className="glass elevated flex items-center gap-1 rounded-full px-2 py-1.5">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold"
        >
          <span className="grid h-6 w-6 place-items-center rounded-md bg-primary/15 text-primary">
            <Terminal className="h-3.5 w-3.5" />
          </span>
          <span className="font-mono">{DEV_NAME}</span>
        </a>
        <span className="mx-1 hidden h-5 w-px bg-border md:block" />
        <ul className="hidden items-center md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`relative rounded-full px-3 py-1.5 font-mono text-xs transition-colors ${active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {n.label}
                {active === n.id && (
                  <span className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
        >
          hire <ArrowRight className="h-3 w-3" />
        </a>
      </nav>
    </header>
  );
}

export function SocialRail() {
  const items = [
    { href: DEV_GITHUB_URL, icon: Github, label: "GitHub" },
    { href: DEV_LINKEDIN_URL, icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${DEV_EMAIL}`, icon: Mail, label: "Email" },
  ];
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden flex-col gap-2 lg:flex">
      {items.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="glass grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:text-foreground hover:glow-accent"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

export function ResumeButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href="#projects"
        className="group inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
      >
        view projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </a>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-4 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-secondary"
      >
        <Mail className="h-4 w-4" /> contact me
      </a>
      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download={`${DEV_NAME} Resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md border border-border/60 px-4 py-2.5 text-sm text-muted-foreground transition hover:text-foreground"
      >
        <Download className="h-4 w-4" /> resume.pdf
      </a>
    </div>
  );
}
