import AgentLog from "./AgentLog";

type Node = { id: string; label: string; sub: string; x: number; y: number; tone: "gold" | "cyan" };

// Agentens verktyg runt kärnan. Koordinater i viewBoxen 0–480.
const nodes: Node[] = [
  { id: "user", label: "Användare", sub: "uppgift", x: 240, y: 46, tone: "gold" },
  { id: "mcp", label: "MCP-server", sub: "verktyg", x: 74, y: 150, tone: "cyan" },
  { id: "api", label: ".NET API", sub: "C# · REST", x: 406, y: 150, tone: "cyan" },
  { id: "db", label: "Vector DB", sub: "Qdrant · RAG", x: 70, y: 330, tone: "cyan" },
  { id: "azure", label: "Azure", sub: "OpenAI · Search", x: 410, y: 330, tone: "cyan" },
  { id: "evals", label: "Evals", sub: "golden set", x: 240, y: 424, tone: "gold" },
];

const CORE = { x: 240, y: 240 };

/** Kurva från kärnan till en nod, böjd lite åt sidan för ett organiskt nätverk. */
function edge(n: Node) {
  const mx = (CORE.x + n.x) / 2 + (n.y - CORE.y) * 0.18;
  const my = (CORE.y + n.y) / 2 - (n.x - CORE.x) * 0.18;
  return `M${CORE.x} ${CORE.y} Q${mx} ${my} ${n.x} ${n.y}`;
}

/**
 * Ett levande diagram över en AI-agent och dess verktyg – det jag bygger.
 * Ren SVG med CSS-animationer som startar först när sidan laddat klart (se <MotionGate />).
 */
export default function AgentGraph() {
  return (
    <figure className="relative mx-auto w-full max-w-[30rem]">
      <div aria-hidden className="glow-cyan absolute inset-0" />
      <svg viewBox="0 0 480 480" role="img" aria-labelledby="graf-titel" className="relative w-full overflow-visible">
        <title id="graf-titel">
          Diagram: en AI-agent i mitten kopplad till MCP-server, .NET API, vektordatabas, Azure och evals
        </title>
        <defs>
          <radialGradient id="core-glow">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="core-fill" x1="0" y1="0" x2="1" y2="1">
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
          const color = n.tone === "gold" ? "var(--gold)" : "var(--cyan)";
          return (
            <g key={n.id}>
              <path d={d} fill="none" stroke="var(--border-strong)" strokeWidth="1" />
              <path d={d} fill="none" stroke={color} strokeOpacity="0.55" strokeWidth="1.2" className="edge-flow" />
              {/* Datapaket som färdas längs kanten (startar när sidan laddat klart) */}
              <circle
                r="3.5"
                fill={color}
                className="graph-pulse motion-pulse"
                style={{
                  offsetPath: `path("${d}")`,
                  animationDuration: `${2.4 + (i % 3) * 0.5}s`,
                  animationDelay: `${i * 0.35}s`,
                  animationDirection: i === 0 ? "reverse" : "normal",
                }}
              />
            </g>
          );
        })}

        {/* Kärnan: agenten */}
        <circle cx="240" cy="240" r="92" fill="url(#core-glow)" />
        <circle cx="240" cy="240" r="48" fill="none" stroke="var(--cyan)" className="graph-ring motion-pulse" />
        <circle cx="240" cy="240" r="46" fill="var(--surface-strong)" stroke="url(#core-fill)" strokeWidth="1.5" />
        <text x="240" y="238" textAnchor="middle" className="fill-fg font-display text-[17px] font-semibold">
          Agent
        </text>
        <text x="240" y="255" textAnchor="middle" className="fill-subtle font-mono text-[10px]">
          Claude · LLM
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
              stroke={n.tone === "gold" ? "var(--gold)" : "var(--border-strong)"}
              strokeOpacity={n.tone === "gold" ? 0.6 : 1}
            />
            <circle cx={n.x - 41} cy={n.y} r="3" fill={n.tone === "gold" ? "var(--gold)" : "var(--cyan)"} />
            <text x={n.x - 32} y={n.y - 2} className="fill-fg text-[12.5px] font-medium">
              {n.label}
            </text>
            <text x={n.x - 32} y={n.y + 12} className="fill-subtle font-mono text-[9.5px]">
              {n.sub}
            </text>
          </g>
        ))}
      </svg>

      <figcaption className="relative mx-auto -mt-1 max-w-72 sm:mr-0 sm:w-72 lg:-mr-6">
        <AgentLog />
      </figcaption>
    </figure>
  );
}
