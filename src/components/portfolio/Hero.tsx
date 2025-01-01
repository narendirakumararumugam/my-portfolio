import { useEffect, useState } from "react";
import { GitBranch, Cpu } from "lucide-react";
import { NetworkBackground, FloatingSnippets } from "./Background";
import { ResumeButtons } from "./Nav";
import profileImg from "@/assets/profile.png";

const DEV_NAME = import.meta.env.VITE_DEV_NAME;
const DEV_NICKNAME = import.meta.env.VITE_DEV_NICKNAME;
const DEV_COMPANY = import.meta.env.VITE_DEV_COMPANY;
const DEV_ROLE = import.meta.env.VITE_DEV_ROLE;
const DEV_CURRENT_REGION = import.meta.env.VITE_DEV_CURRENT_REGION;
const DEV_OPEN_TO_ROLES = import.meta.env.VITE_DEV_OPEN_TO_ROLES;

const PHRASES = [
  "Building APIs.",
  "Designing Systems.",
  "Scaling Data Pipelines.",
  "Modernizing Legacy Apps.",
];

function useTyping() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = PHRASES[i];
    const speed = del ? 35 : 60;
    const t = setTimeout(() => {
      if (!del) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDel(true), 1200);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((i + 1) % PHRASES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

export function Hero() {
  const typed = useTyping();
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
    >
      <NetworkBackground />
      <FloatingSnippets />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
              <span className="relative h-2 w-2 rounded-full bg-primary" />
            </span>
            available · open to {DEV_OPEN_TO_ROLES} roles
          </div>

          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            hi, my name is
          </div>
          <h1 className="mt-3 font-sans text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-6xl">
            <span className="text-gradient">{DEV_NAME}</span>
          </h1>
          <h2 className="mt-3 text-2xl font-semibold text-muted-foreground sm:text-3xl">
            {DEV_ROLE}
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I build enterprise systems with{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">
              Java
            </code>
            ,{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">
              Spring Boot
            </code>
            ,{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">
              Angular
            </code>
            , and distributed data pipelines on{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">
              Spark
            </code>{" "}
            /{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">
              Databricks
            </code>
          </p>

          <div className="mt-8 flex max-w-xl items-center gap-3 rounded-lg border border-border bg-card/60 px-4 py-3 font-mono text-sm backdrop-blur">
            <span className="text-primary">~/{DEV_NICKNAME}</span>
            <span className="text-muted-foreground">$</span>
            <span className="text-foreground">{typed}</span>
            <span className="caret" />
          </div>

          <div className="mt-10">
            <ResumeButtons />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
            style={{ background: "var(--gradient-aurora)" }}
          />
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur">
            <img
              src={profileImg}
              alt={`Portrait of ${DEV_NAME}, ${DEV_ROLE}`}
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="pointer-events-none absolute left-3 top-3 rounded bg-background/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur">
              profile.jpg
            </div>
            <div className="pointer-events-none absolute bottom-3 right-3 rounded bg-background/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur">
              1:1 · 800×800
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-6 top-28 hidden flex-col gap-2 font-mono text-[10px] text-muted-foreground/70 lg:flex">
        <span className="flex items-center gap-1.5">
          <GitBranch className="h-3 w-3" /> main · {DEV_NICKNAME}@{DEV_COMPANY}
        </span>
        <span className="flex items-center gap-1.5">
          <Cpu className="h-3 w-3" /> region: {DEV_CURRENT_REGION}
        </span>
      </div>
    </section>
  );
}
