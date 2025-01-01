import { GitCommit, GitMerge, Tag } from "lucide-react";
import { SectionHeader } from "./About";
import { LOG } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeader
        file="git.log"
        title="experience"
        kicker="$ git log --oneline --graph --decorate  # NielsenIQ · Jul 2023 – present"
      />

      <ol className="relative mt-10 space-y-8 border-l border-border pl-8">
        {LOG.map((e) => (
          <li key={e.hash} className="relative">
            <span className="absolute -left-[42px] top-1 grid h-7 w-7 place-items-center rounded-full border border-border bg-card glow-accent">
              {e.type === "commit" && <GitCommit className="h-3.5 w-3.5 text-accent" />}
              {e.type === "merge" && <GitMerge className="h-3.5 w-3.5 text-accent" />}
              {e.type === "release" && <Tag className="h-3.5 w-3.5 text-primary" />}
            </span>
            <div className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition hover:elevated">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="text-muted-foreground">commit</span>
                <span className="text-primary">{e.hash}</span>
                {e.tag && (
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-primary">
                    {e.tag}
                  </span>
                )}
                <span className="ml-auto text-muted-foreground">{e.date}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold">{e.title}</h3>
              <div className="font-mono text-xs text-muted-foreground">@ {e.org}</div>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
