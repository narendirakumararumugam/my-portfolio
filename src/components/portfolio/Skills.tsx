import { GROUPS } from "@/data/portfolio";
import { SectionHeader } from "./About";

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeader
        file="skills.json"
        title="technical skills"
        kicker="The toolchain I use day-to-day, grouped by layer of the stack."
      />

      <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card/40 p-6 backdrop-blur">
        <div className="mb-4 font-mono text-xs text-muted-foreground">
          // how the stack fits together
        </div>
        <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
          {["Angular", "→", "Spring Boot", "→", "REST APIs", "→", "PostgreSQL"].map((t, i) => (
            <Chip key={i} text={t} />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-sm">
          {["Retailer Data", "→", "Apache Spark", "→", "Databricks", "→", "Azure"].map((t, i) => (
            <Chip key={i} text={t} variant="accent" />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-sm">
          {["Azure", "Databricks", "Docker"].map((t, i) => (
            <Chip key={i} text={t} variant="accent" />
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {GROUPS.map((g) => (
          <div
            key={g.name}
            className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">{g.name}</h3>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {g.items.length} pkg
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li
                  key={it.name}
                  className="group inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-1.5 font-mono text-xs text-foreground transition hover:border-primary/40 hover:bg-secondary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {it.name}
                  <span className="text-muted-foreground">· {it.years}y</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Chip({ text, variant = "primary" }: { text: string; variant?: "primary" | "accent" }) {
  if (text === "→") return <span className="text-muted-foreground">→</span>;
  const ring = variant === "primary" ? "ring-primary/30" : "ring-accent/30";
  const dot = variant === "primary" ? "bg-primary" : "bg-accent";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-1.5 ring-1 ${ring} transition hover:bg-secondary`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {text}
    </span>
  );
}
