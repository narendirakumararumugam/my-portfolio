import { useState } from "react";
import { Star, GitFork, ExternalLink, Github, Lock } from "lucide-react";
import { SectionHeader } from "./About";
import { Project, PROJECTS } from "@/data/portfolio";

const DEV_NAME = import.meta.env.VITE_DEV_NAME;

const FILTERS = ["all", "frontend", "backend", "data", "personal"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");
  const list = PROJECTS.filter((p) => filter === "all" || p.filter.includes(filter));

  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeader
        file="repositories.list"
        title="featured projects"
        kicker="Production systems I designed, shipped, and own end-to-end."
      />

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-3 py-1 font-mono text-xs transition ${filter === f ? "border-primary/40 bg-primary/10 text-primary" : "border-border bg-card/40 text-muted-foreground hover:text-foreground"}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {list.map((p) => (
          <RepoCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
}

function RepoCard({ p }: { p: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition hover:border-accent/40 hover:bg-card/80 hover:elevated">
      <div
        className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <header className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <Github className="h-4 w-4 text-muted-foreground" />
          <a
            href="#"
            className="font-mono text-sm font-semibold text-accent transition hover:underline"
          >
            {DEV_NAME}/{p.name}
          </a>
          <span className="inline-flex items-center gap-1 rounded-full border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {p.visibility === "Private" && <Lock className="h-2.5 w-2.5" />}
            {p.visibility}
          </span>
        </div>
        {p.url && (
          <a
            href={p.url}
            className="text-muted-foreground transition hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </header>

      <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>

      <ul className="mt-4 space-y-1 font-mono text-xs text-foreground/90">
        {p.achievements.map((a) => (
          <li key={a} className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 rounded-full bg-primary" /> {a}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-border bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition group-hover:border-accent/30 group-hover:text-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
        <svg viewBox="0 0 320 60" className="h-14 w-full">
          <defs>
            <linearGradient id={`flow-${p.name}`} x1="0" x2="1">
              <stop offset="0" stopColor="oklch(0.72 0.18 235)" />
              <stop offset="1" stopColor="oklch(0.78 0.16 155)" />
            </linearGradient>
          </defs>
          {[30, 110, 200, 290].map((x, i) => (
            <g key={i}>
              <rect
                x={x - 22}
                y={20}
                width="44"
                height="20"
                rx="4"
                fill="oklch(0.22 0.014 260)"
                stroke="oklch(0.4 0.05 235)"
              />
              <text
                x={x}
                y={33}
                textAnchor="middle"
                fontFamily="JetBrains Mono"
                fontSize="8"
                fill="oklch(0.85 0.005 260)"
              >
                {["UI", "API", "SVC", "DB"][i]}
              </text>
            </g>
          ))}
          {[52, 132, 222].map((x, i) => (
            <line
              key={i}
              x1={x}
              y1={30}
              x2={x + 36}
              y2={30}
              stroke={`url(#flow-${p.name})`}
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-flow"
            />
          ))}
        </svg>
      </div>

      <footer className="mt-5 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: p.langColor }} />{" "}
            {p.language}
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3" /> {p.stars}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="h-3 w-3" /> {p.forks}
          </span>
        </div>
        <span>updated {p.updated}</span>
      </footer>
    </article>
  );
}
