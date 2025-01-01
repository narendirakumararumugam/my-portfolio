import { useEffect, useRef } from "react";

/**
 * Structured network background.
 * - Fixed square viewBox so nodes stay perfectly circular.
 * - Deterministic triangular lattice — edges form a clear pattern, not random spaghetti.
 * - Confined to its parent (hero), with a fade mask so it never fights the content.
 */
export function NetworkBackground() {
  // Triangular lattice points
  const COLS = 7;
  const ROWS = 5;
  const STEP_X = 160;
  const STEP_Y = 140;
  const OFFSET_X = 80;
  const OFFSET_Y = 80;

  const points: { x: number; y: number; key: string }[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const x = OFFSET_X + c * STEP_X + (r % 2 === 1 ? STEP_X / 2 : 0);
      const y = OFFSET_Y + r * STEP_Y;
      points.push({ x, y, key: `${r}-${c}` });
    }
  }

  // Edges: connect each point to its right + two lower neighbors (clean lattice)
  const edges: { x1: number; y1: number; x2: number; y2: number; key: string }[] = [];
  const at = (r: number, c: number) => {
    const x = OFFSET_X + c * STEP_X + (r % 2 === 1 ? STEP_X / 2 : 0);
    const y = OFFSET_Y + r * STEP_Y;
    return { x, y };
  };
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const a = at(r, c);
      if (c < COLS - 1) {
        const b = at(r, c + 1);
        edges.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, key: `h-${r}-${c}` });
      }
      if (r < ROWS - 1) {
        const b1 = at(r + 1, c);
        edges.push({ x1: a.x, y1: a.y, x2: b1.x, y2: b1.y, key: `d1-${r}-${c}` });
        if (r % 2 === 0 && c > 0) {
          const b2 = at(r + 1, c - 1);
          edges.push({ x1: a.x, y1: a.y, x2: b2.x, y2: b2.y, key: `d2-${r}-${c}` });
        } else if (r % 2 === 1 && c < COLS - 1) {
          const b2 = at(r + 1, c + 1);
          edges.push({ x1: a.x, y1: a.y, x2: b2.x, y2: b2.y, key: `d2-${r}-${c}` });
        }
      }
    }
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        maskImage: "radial-gradient(ellipse 75% 70% at 50% 45%, black 35%, transparent 85%)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 50% 45%, black 35%, transparent 85%)",
      }}
      aria-hidden
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="node-glow">
            <stop offset="0%" stopColor="oklch(0.72 0.18 235)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.72 0.18 235)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {edges.map((e, i) => (
          <line
            key={e.key}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            stroke="oklch(0.72 0.18 235 / 22%)"
            strokeWidth="1"
            strokeDasharray="3 6"
            className="animate-flow"
            style={{ animationDelay: `${(i % 8) * 0.15}s` }}
          />
        ))}

        {points.map((p, i) => (
          <g key={p.key}>
            <circle
              cx={p.x}
              cy={p.y}
              r="14"
              fill="url(#node-glow)"
              className="animate-pulse-node"
              style={{ animationDelay: `${(i % 6) * 0.4}s` }}
            />
            <circle cx={p.x} cy={p.y} r="2.5" fill="oklch(0.78 0.16 155)" />
          </g>
        ))}
      </svg>
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
    </div>
  );
}

/**
 * Floating snippets arranged in fixed lanes so they never overlap each other.
 * Each lane has its own column and animation delay.
 */
const SNIPPETS = [
  "$ git commit -m 'feat: auth middleware'",
  "200 OK · /api/v1/users · 38ms",
  "@Service class OrderService { }",
  "SELECT id FROM events WHERE ts > now()",
  "Build #2847 ✓ deployed to prod",
  "kubectl rollout status deploy/api",
];

export function FloatingSnippets() {
  // Lanes spaced evenly across the viewport
  const lanes = [6, 22, 38, 62, 78, 92];
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
      style={{
        maskImage: "linear-gradient(to top, black 0%, black 30%, transparent 70%)",
        WebkitMaskImage: "linear-gradient(to top, black 0%, black 30%, transparent 70%)",
      }}
    >
      {SNIPPETS.map((text, i) => (
        <span
          key={i}
          className="absolute bottom-0 whitespace-nowrap font-mono text-[10px] text-muted-foreground/35"
          style={{
            left: `${lanes[i]}%`,
            animation: `float-up 18s linear ${i * 3}s infinite`,
          }}
        >
          {text}
        </span>
      ))}
    </div>
  );
}

/** Smooth circular spotlight that follows the cursor. */
export function CursorTrail() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0,
      ty = 0,
      x = 0,
      y = 0;
    const SIZE = 360;
    const half = SIZE / 2;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.15;
      y += (ty - y) * 0.15;
      el.style.transform = `translate3d(${x - half}px, ${y - half}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 rounded-full opacity-70 mix-blend-screen"
      style={{
        width: 360,
        height: 360,
        aspectRatio: "1 / 1",
        background:
          "radial-gradient(circle at center, oklch(0.72 0.18 235 / 16%) 0%, oklch(0.72 0.18 235 / 6%) 35%, transparent 65%)",
      }}
    />
  );
}
