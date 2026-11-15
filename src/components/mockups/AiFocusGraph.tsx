import NodeGraph, { type GraphNode } from "../ui/NodeGraph";

// Åtta noder runt kärnan, grupperade per fas i fördjupningen (45° mellan varje nod)
const nodes: GraphNode[] = [
  { id: "search", label: "Hybrid search", sub: "Fas 1 · RAG", x: 240, y: 60, tone: "gold", outlined: true, inbound: true },
  { id: "rerank", label: "Reranker", sub: "citations", x: 367, y: 113, tone: "gold", outlined: true, inbound: true },
  { id: "evals", label: "Evals", sub: "golden set ≥30", x: 412, y: 240, tone: "gold", outlined: true },
  { id: "mcp", label: "MCP-server", sub: "Fas 2 · agent", x: 367, y: 367, tone: "cyan", outlined: true },
  { id: "tools", label: "Tool use", sub: "flera verktyg", x: 240, y: 420, tone: "cyan", outlined: true },
  { id: "hitl", label: "Godkännande", sub: "human-in-loop", x: 113, y: 367, tone: "cyan", outlined: true, inbound: true },
  { id: "api", label: "FastAPI", sub: "Fas 3 · Docker", x: 68, y: 240, tone: "violet", outlined: true },
  { id: "guard", label: "Guardrails", sub: "tracing · cost", x: 113, y: 113, tone: "violet", outlined: true },
];

const phases = [
  { tone: "gold", label: "Fas 1 · RAG + evals" },
  { tone: "cyan", label: "Fas 2 · Agents + MCP" },
  { tone: "violet", label: "Fas 3 · Production" },
] as const;

/** Diagram över det jag fördjupar mig i: RAG, agenter med MCP och produktion. */
export default function AiFocusGraph() {
  return (
    <figure className="relative mx-auto w-full max-w-[26rem]">
      <div aria-hidden className="glow-cyan absolute inset-0" />
      <NodeGraph
        id="ai-graf"
        title="Diagram över AI-fördjupningen: en språkmodell i mitten med RAG, agenter med MCP och produktion runt om"
        core={{ label: "LLM", sub: "GPT · Claude" }}
        nodes={nodes}
      />
      <figcaption className="relative mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1.5 font-mono text-[10.5px] text-muted">
        {phases.map((phase) => (
          <span key={phase.label} className="flex items-center gap-1.5">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: `var(--${phase.tone})` }} />
            {phase.label}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
