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
                <strong className="text-foreground">3+ years of experience</strong> designing and
                developing enterprise applications using Java, Spring Boot, Angular, Apache Spark,
                Databricks, and Microsoft Azure. Passionate about building scalable backend systems,
                distributed data platforms, and modern AI-powered enterprise solutions with
                end-to-end ownership.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-sm text-primary">## What I do</h4>
              <ul className="mt-2 space-y-1.5 text-muted-foreground">
                <li>
                  • Develop cloud-native ETL services processing{" "}
                  <strong className="text-foreground">~11 TB of retailer data monthly</strong> using
                  Apache Spark and Azure Databricks.
                </li>

                <li>
                  • Optimized SQL execution and report processing, reducing response time from{" "}
                  <strong className="text-foreground">
                    3–5 minutes to 10–15 seconds (~95% faster)
                  </strong>
                  .
                </li>

                <li>
                  • Designed and built an enterprise monitoring platform using Spring Boot, Angular,
                  and PostgreSQL, replacing manual tracking across{" "}
                  <strong className="text-foreground">8 enterprise applications</strong>.
                </li>

                <li>
                  • Contributed to the design and development of an{" "}
                  <strong className="text-foreground">Enterprise Multi-Agent AI Platform</strong>{" "}
                  using Spring AI, Azure OpenAI, RAG, and MCP for intelligent knowledge retrieval
                  and workflow automation.
                </li>

                <li>
                  • Delivered a legacy Java → Spring Boot / Angular modernization PoC{" "}
                  <strong className="text-foreground">20 days ahead of schedule</strong> while
                  implementing secure authentication and reusable UI components.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-sm text-primary">## Currently</h4>
              <p className="mt-2 text-muted-foreground">
                Building cloud-native data platforms with Apache Spark and Azure Databricks while
                exploring Enterprise AI using Spring AI, Azure OpenAI, Retrieval-Augmented
                Generation (RAG), Multi-Agent systems, and Model Context Protocol (MCP).
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
                Full-stack engineer · Angular · Spring Boot · RAG
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
