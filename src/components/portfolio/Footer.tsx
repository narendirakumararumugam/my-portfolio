import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const DEV_NAME = import.meta.env.VITE_DEV_NAME;
const DEV_EMAIL = import.meta.env.VITE_DEV_EMAIL;
const DEV_GITHUB_URL = import.meta.env.VITE_DEV_GITHUB_URL;
const DEV_LINKEDIN_URL = import.meta.env.VITE_DEV_LINKEDIN_URL;
const DEV_PORTFOLIO_VERSION = import.meta.env.VITE_DEV_PORTFOLIO_VERSION;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-mono text-sm font-semibold">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-primary/15 text-primary">
                <Terminal className="h-3.5 w-3.5" />
              </span>
              {DEV_NAME}
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Full-stack engineer shipping reliable software at scale. Java · Spring Boot · Angular
              · Apache Spark · Azure.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                {
                  href: DEV_GITHUB_URL,
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: DEV_LINKEDIN_URL,
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                { href: `mailto:${DEV_EMAIL}`, icon: Mail, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-md border border-border bg-background/40 text-muted-foreground transition hover:text-foreground hover:glow-accent"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              navigate
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-2 font-mono text-sm">
              {["about", "skills", "projects", "experience", "contact"].map((n) => (
                <li key={n}>
                  <a
                    className="text-muted-foreground transition hover:text-foreground"
                    href={`#${n}`}
                  >
                    · {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              currently
            </div>
            <div className="mt-3 space-y-1.5 font-mono text-[11px] text-muted-foreground">
              <div className="flex justify-between">
                <span>role</span>
                <span className="text-foreground">full-stack engineer</span>
              </div>
              <div className="flex justify-between">
                <span>stack</span>
                <span className="text-foreground">java · spring · angular</span>
              </div>
              <div className="flex justify-between">
                <span>status</span>
                <span className="text-primary">open to roles</span>
              </div>
              <div className="flex justify-between">
                <span>response</span>
                <span className="text-primary">&lt; 24h</span>
              </div>
              <div className="flex justify-between">
                <span>build</span>
                <span className="text-primary">✓ passing</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] text-muted-foreground">
          <span>© {year} · crafted with TypeScript and care.</span>
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> all systems
              operational
            </span>
            <span>portfolio {DEV_PORTFOLIO_VERSION}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
