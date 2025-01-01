import { METRICS } from "@/data/portfolio";
import { SectionHeader } from "./About";

function Spark({ data }: { data: number[] }) {
  const min = Math.min(...data),
    max = Math.max(...data);
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 30 - ((v - min) / (max - min || 1)) * 26 - 2;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 100 30" className="h-8 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`sp-${pts.slice(0, 6)}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.16 155)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="oklch(0.78 0.16 155)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,30 ${pts} 100,30`} fill={`url(#sp-${pts.slice(0, 6)})`} />
      <polyline points={pts} fill="none" stroke="oklch(0.78 0.16 155)" strokeWidth="1.4" />
    </svg>
  );
}

export function Metrics() {
  return (
    <section id="metrics" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeader
        file="metrics.dashboard"
        title="engineering metrics"
        kicker="Live-style monitoring widgets summarizing impact across systems."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {METRICS.map(({ icon: Icon, k, l, trend, spark }) => (
          <div
            key={l}
            className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition hover:elevated"
          >
            <div className="flex items-start justify-between">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
                {trend}
              </span>
            </div>
            <div className="mt-4 font-mono text-3xl font-bold tracking-tight">{k}</div>
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {l}
            </div>
            <div className="mt-4">
              <Spark data={spark} />
            </div>
            <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> impact
              </span>
              <span>career to date</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
