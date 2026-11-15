import NodeGraph, { type GraphNode } from "../ui/NodeGraph";
import AgentLog from "./AgentLog";

// Agentens verktyg runt kärnan. Koordinater i viewBoxen 0–480.
const nodes: GraphNode[] = [
  { id: "user", label: "Användare", sub: "uppgift", x: 240, y: 46, tone: "gold", outlined: true, inbound: true },
  { id: "mcp", label: "MCP-server", sub: "verktyg", x: 74, y: 150, tone: "cyan" },
  { id: "api", label: ".NET API", sub: "C# · REST", x: 406, y: 150, tone: "cyan" },
  { id: "db", label: "Vector DB", sub: "Qdrant · RAG", x: 70, y: 330, tone: "cyan" },
  { id: "azure", label: "Azure", sub: "OpenAI · Search", x: 410, y: 330, tone: "cyan" },
  { id: "evals", label: "Evals", sub: "golden set", x: 240, y: 424, tone: "gold", outlined: true },
];

/** Ett levande diagram över en AI-agent och dess verktyg – det jag bygger. */
export default function AgentGraph() {
  return (
    <figure className="relative mx-auto w-full max-w-[30rem]">
      <div aria-hidden className="glow-cyan absolute inset-0" />
      <NodeGraph
        id="hero-graf"
        title="Diagram: en AI-agent i mitten kopplad till MCP-server, .NET API, vektordatabas, Azure och evals"
        core={{ label: "Agent", sub: "Claude · LLM" }}
        nodes={nodes}
      />
      <figcaption className="relative mx-auto -mt-1 max-w-72 sm:mr-0 sm:w-72 lg:-mr-6">
        <AgentLog />
      </figcaption>
    </figure>
  );
}
