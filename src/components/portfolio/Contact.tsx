import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { SectionHeader } from "./About";
import { Line, SCRIPT } from "@/data/portfolio";

function useTerminal() {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    let i = 0;
    let cancelled = false;

    const step = () => {
      // 👇 FIX: Immediate safety return if cancelled OR if index matches/exceeds script size
      if (cancelled || i >= SCRIPT.length) return;

      // Double check that the index actually contains a valid object
      const nextLine = SCRIPT[i];
      if (nextLine) {
        setLines((prev) => [...prev, nextLine]);
        i++;
        setTimeout(step, 700);
      }
    };

    const initialTimeout = setTimeout(step, 400);

    return () => {
      cancelled = true;
      clearTimeout(initialTimeout); // Clean up the initial timeout block
    };
  }, []);

  return lines;
}

export function Contact() {
  const lines = useTerminal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 9999, behavior: "smooth" });
  }, [lines]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName("");
      setEmail("");
      setMsg("");
    }, 3000);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeader
        file="contact.sh"
        title="contact"
        kicker="Open a connection. I respond within 24 hours."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-1">
        {/* terminal */}
        <div className="overflow-hidden rounded-xl border border-border bg-[oklch(0.13_0.012_260)] elevated">
          <div className="flex items-center gap-2 border-b border-border bg-[oklch(0.16_0.012_260)] px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[11px] text-muted-foreground">
              ~/contact — zsh
            </span>
          </div>
          <div ref={scrollRef} className="h-[340px] overflow-y-auto p-5 font-mono text-sm">
            <div className="text-muted-foreground">Last login: now on tty/portfolio</div>
            {lines.map((l, i) => (
              <div key={i} className="mt-1.5">
                {l.kind === "in" && (
                  <div>
                    <span className="text-primary">engineer@dev</span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-accent">~</span>
                    <span className="text-muted-foreground">$ </span>
                    {l.text}
                  </div>
                )}
                {l.kind === "ok" && <div className="text-primary/90">{l.text}</div>}
                {l.kind === "err" && <div className="text-destructive">{l.text}</div>}
              </div>
            ))}
            <div className="mt-2">
              <span className="text-primary">engineer@dev</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-accent">~</span>
              <span className="text-muted-foreground">$ </span>
              <span className="caret" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-border p-3">
            {[
              { href: import.meta.env.VITE_DEV_GITHUB_URL, icon: Github, label: "github" },
              { href: import.meta.env.VITE_DEV_LINKEDIN_URL, icon: Linkedin, label: "linkedin" },
              { href: `mailto:${import.meta.env.VITE_DEV_EMAIL}`, icon: Mail, label: "email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/40 px-2 py-2 font-mono text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
              >
                <s.icon className="h-3.5 w-3.5" /> {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-xs text-muted-foreground">{label}</span>
      <input
        required
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-md border border-border bg-background/60 px-3 py-2 text-sm outline-none transition focus:border-accent focus:glow-accent"
      />
    </label>
  );
}
