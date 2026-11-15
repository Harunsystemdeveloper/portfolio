"use client";

import { useEffect, useState } from "react";

// En påhittad men realistisk körning av en agentloop
const lines = [
  { kind: "in", text: "retrieve → hybrid search + rerank" },
  { kind: "ok", text: "8 källor · citations" },
  { kind: "in", text: "tool_call → mcp.server" },
  { kind: "ok", text: "201 Created · 24 ms" },
  { kind: "ok", text: "eval: faithfulness 0.94" },
  { kind: "wait", text: "väntar på godkännande (HITL)" },
] as const;

const VISIBLE = 4;

/** Litet terminalfönster som "loggar" vad agenten gör. Rent dekorativt. */
export default function AgentLog() {
  const [step, setStep] = useState(VISIBLE);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setStep((s) => s + 1), 1600);
    return () => window.clearInterval(id);
  }, []);

  const shown = Array.from({ length: VISIBLE }, (_, i) => lines[(step - VISIBLE + i) % lines.length]);

  return (
    <div aria-hidden className="card overflow-hidden rounded-2xl text-left shadow-2xl shadow-black/20">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[10px] text-subtle">agent.log</span>
      </div>
      <ol className="space-y-1 px-3 py-2.5 font-mono text-[11px] leading-relaxed">
        {shown.map((line, i) => (
          <li key={step - VISIBLE + i} className={`truncate ${i === VISIBLE - 1 ? "animate-rise" : ""}`}>
            <span className={line.kind === "ok" ? "text-green" : line.kind === "wait" ? "text-gold" : "text-cyan"}>
              {line.kind === "ok" ? "✓" : line.kind === "wait" ? "◷" : "›"}
            </span>{" "}
            <span className="text-muted">{line.text}</span>
            {i === VISIBLE - 1 && <span className="caret ml-0.5 text-fg">▍</span>}
          </li>
        ))}
      </ol>
    </div>
  );
}
