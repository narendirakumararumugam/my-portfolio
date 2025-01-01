import { currentlyExploring } from "@/data/portfolio";
import { BookOpen, MapPin, Building2, GraduationCap, Sparkles } from "lucide-react";

const DEV_NAME = import.meta.env.VITE_DEV_NAME;
const DEV_NICKNAME = import.meta.env.VITE_DEV_NICKNAME;
const DEV_COMPANY = import.meta.env.VITE_DEV_COMPANY;
const DEV_CURRENT_REGION = import.meta.env.VITE_DEV_CURRENT_REGION;

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeader file="README.md" title="about" />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
        <article className="overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur">
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-2 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" /> README.md
            </span>
            <span>Preview</span>
          </div>
          <div className="space-y-5 px-6 py-7">
            <div>
              <h3 className="text-2xl font-bold"># Hi, I'm {import.meta.env.VITE_DEV_NAME} 👋</h3>
              <p className="mt-3 text-muted-foreground">
                <strong className="text-foreground">3+ years of experience</strong> building
                enterprise applications with Java, Spring Boot, Angular, Apache Spark, Databricks,
                and Azure. I take end-to-end ownership — from database schema and REST APIs to
                Angular UIs and distributed data pipelines.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-sm text-primary">## What I do</h4>
              <ul className="mt-2 space-y-1.5 text-muted-foreground">
                <li>
                  • Develop Spark-based ETL services on Azure Databricks processing{" "}
                  <strong className="text-foreground">~11 TB of retailer data monthly</strong>
                </li>
                <li>
                  • Redesigned report processing &amp; SQL execution —{" "}
                  <strong className="text-foreground">3–5 min → 10–15 s (~95% faster)</strong>
                </li>
                <li>
                  • Architected an internal monitoring platform (Spring Boot + Angular) replacing
                  Excel tracking for 8 apps
                </li>
                <li>
                  • Delivered a legacy → Spring Boot / Angular modernization PoC{" "}
                  <strong className="text-foreground">20 days ahead of schedule</strong>
                </li>
                <li>
                  • Automated retailer onboarding —{" "}
                  <strong className="text-foreground">~80% less manual config</strong>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm text-primary">## Currently</h4>
              <p className="mt-2 text-muted-foreground">
                Migrating core capabilities from a legacy .NET Framework app to a distributed Apache
                Spark / Databricks architecture on Azure.
              </p>
            </div>
          </div>
        </article>

        <aside className="space-y-4">
          <div className="overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur">
            <div className="h-20" style={{ background: "var(--gradient-aurora)" }} />
            <div className="px-5 pb-5">
              <div className="-mt-10 mb-3 grid h-20 w-20 place-items-center rounded-full border-4 border-card bg-secondary font-mono text-2xl font-bold text-primary">
                {"</>"}
              </div>
              <div className="font-semibold">{DEV_NAME}</div>
              <div className="font-mono text-xs text-muted-foreground">@{DEV_NICKNAME}-dev</div>
              <p className="mt-3 text-sm text-muted-foreground">
                Full-stack engineer · backend-leaning · Spark &amp; Databricks on Azure.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Building2 className="h-3.5 w-3.5" /> {DEV_COMPANY} · {DEV_CURRENT_REGION}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" /> {DEV_CURRENT_REGION}, India · Hybrid
                </li>
                <li className="flex items-center gap-2">
                  <GraduationCap className="h-3.5 w-3.5" /> CEG Chennai · CSE · GPA 8.89
                </li>
              </ul>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                {[
                  ["3+y", "exp"],
                  ["11TB", "/mo"],
                  ["95%", "faster"],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-md border border-border bg-background/40 py-2">
                    <div className="font-mono text-sm font-bold text-foreground">{n}</div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur">
            <div className="mb-3 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              currently exploring
            </div>
            <ul className="space-y-2 text-sm">
              {currentlyExploring.map(([k, v]) => (
                <li key={k} className="flex items-start justify-between gap-3 font-mono text-xs">
                  <span className="text-primary">{k}</span>
                  <span className="text-right text-muted-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function SectionHeader({
  file,
  title,
  kicker,
}: {
  file: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">~/portfolio</span> $ cat {file}
        </div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-muted-foreground/60">##</span> {title}
        </h2>
        {kicker && <p className="mt-2 max-w-2xl text-muted-foreground">{kicker}</p>}
      </div>
      <div className="hidden font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:block">
        section
      </div>
    </div>
  );
}
