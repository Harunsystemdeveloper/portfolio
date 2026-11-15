export type GraphNode = {
  id: string;
  label: string;
  sub: string;
  /** Position i viewBoxen 0–480 */
  x: number;
  y: number;
  tone: "gold" | "cyan" | "violet";
  /** Färgad kant runt noden */
  outlined?: boolean;
  /** Datapaketet färdas mot kärnan istället för ut från den */
  inbound?: boolean;
};

type Props = {
  /** Unikt prefix så att flera grafer på sidan inte delar gradient-id:n */
  id: string;
  title: string;
  core: { label: string; sub: string };
  nodes: GraphNode[];
};

const CORE = { x: 240, y: 240 };

/** Kurva från kärnan till en nod, böjd lite åt sidan för ett organiskt nätverk. */
function edge(n: GraphNode) {
  const mx = (CORE.x + n.x) / 2 + (n.y - CORE.y) * 0.18;
  const my = (CORE.y + n.y) / 2 - (n.x - CORE.x) * 0.18;
  return `M${CORE.x} ${CORE.y} Q${mx} ${my} ${n.x} ${n.y}`;
}

/**
 * Levande nätverksdiagram: en kärna med noder runt om och datapaket längs kanterna.
 * Ren SVG med CSS-animationer som startar först när sidan laddat klart (se <MotionGate />).
 */
export default function NodeGraph({ id, title, core, nodes }: Props) {
  return (
    <svg viewBox="0 0 480 480" role="img" aria-labelledby={`${id}-titel`} className="relative w-full overflow-visible">
      <title id={`${id}-titel`}>{title}</title>
      <defs>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--gold)" />
          <stop offset="100%" stopColor="var(--cyan)" />
        </linearGradient>
      </defs>

      {/* Bana som roterar långsamt runt kärnan */}
      <g className="graph-spin" style={{ transformOrigin: "240px 240px" }}>
        <circle cx="240" cy="240" r="120" fill="none" stroke="var(--border-strong)" strokeDasharray="2 8" />
        <circle cx="360" cy="240" r="3" fill="var(--gold)" />
        <circle cx="120" cy="240" r="2" fill="var(--cyan)" />
      </g>
      <circle cx="240" cy="240" r="182" fill="none" stroke="var(--border)" />

      {nodes.map((n, i) => {
        const d = edge(n);
        const color = `var(--${n.tone})`;
        return (
          <g key={n.id}>
            <path d={d} fill="none" stroke="var(--border-strong)" strokeWidth="1" />
            <path d={d} fill="none" stroke={color} strokeOpacity="0.55" strokeWidth="1.2" className="edge-flow" />
            <circle
              r="3.5"
              fill={color}
              className="graph-pulse motion-pulse"
              style={{
                offsetPath: `path("${d}")`,
                animationDuration: `${2.4 + (i % 3) * 0.5}s`,
                animationDelay: `${i * 0.35}s`,
                animationDirection: n.inbound ? "reverse" : "normal",
              }}
            />
          </g>
        );
      })}

      {/* Kärnan */}
      <circle cx="240" cy="240" r="92" fill={`url(#${id}-glow)`} />
      <circle cx="240" cy="240" r="48" fill="none" stroke="var(--cyan)" className="graph-ring motion-pulse" />
      <circle cx="240" cy="240" r="46" fill="var(--surface-strong)" stroke={`url(#${id}-fill)`} strokeWidth="1.5" />
      <text x="240" y="238" textAnchor="middle" className="fill-fg font-display text-[17px] font-semibold">
        {core.label}
      </text>
      <text x="240" y="255" textAnchor="middle" className="fill-subtle font-mono text-[10px]">
        {core.sub}
      </text>

      {nodes.map((n) => (
        <g key={n.id}>
          <rect
            x={n.x - 56}
            y={n.y - 22}
            width="112"
            height="44"
            rx="12"
            fill="var(--surface-strong)"
            stroke={n.outlined ? `var(--${n.tone})` : "var(--border-strong)"}
            strokeOpacity={n.outlined ? 0.6 : 1}
          />
          <circle cx={n.x - 41} cy={n.y} r="3" fill={`var(--${n.tone})`} />
          <text x={n.x - 32} y={n.y - 2} className="fill-fg text-[12.5px] font-medium">
            {n.label}
          </text>
          <text x={n.x - 32} y={n.y + 12} className="fill-subtle font-mono text-[9.5px]">
            {n.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}
