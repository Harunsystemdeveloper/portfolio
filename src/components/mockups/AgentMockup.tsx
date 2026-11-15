// Kodritad "skärmdump" av en agentloop: editor med kod och ett spår av verktygsanrop.
const code: [string, string][][] = [
  [["k", "while "], ["t", "not "], ["v", "done"], ["p", ":"]],
  [["p", "  "], ["v", "reply"], ["p", " = "], ["f", "client.messages.create"], ["p", "("]],
  [["p", "    model="], ["s", '"claude"'], ["p", ", tools="], ["v", "TOOLS"], ["p", ","]],
  [["p", "    messages="], ["v", "history"], ["p", ")"]],
  [["p", "  "], ["k", "for "], ["v", "call "], ["k", "in "], ["v", "reply.tool_calls"], ["p", ":"]],
  [["p", "    "], ["v", "args"], ["p", " = "], ["f", "validate"], ["p", "(call)"]],
  [["p", "    "], ["k", "if "], ["v", "call.risky"], ["p", ": "], ["f", "await_human"], ["p", "()"]],
  [["p", "    "], ["v", "history"], ["p", "."], ["f", "append"], ["p", "("], ["f", "run"], ["p", "(call, args))"]],
];

const tone: Record<string, string> = {
  k: "text-[#c792ea]",
  t: "text-[#c792ea]",
  v: "text-fg/85",
  f: "text-cyan",
  s: "text-gold",
  p: "text-subtle",
};

const trace = [
  { label: "retriever.hybrid_search", ms: "42 ms", ok: true },
  { label: "mcp.tool_call", ms: "24 ms", ok: true },
  { label: "human_review", ms: "väntar", ok: false },
];

export default function AgentMockup() {
  return (
    <div aria-hidden className="w-full select-none">
      <div className="overflow-hidden rounded-xl border border-line-strong bg-surface-strong shadow-2xl shadow-black/30">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 rounded-md bg-bg-soft px-2 py-0.5 font-mono text-[10px] text-muted">agent_loop.py</span>
          <span className="ml-1 font-mono text-[10px] text-subtle">mcp_server.py</span>
        </div>
        <pre className="overflow-hidden px-4 py-4 font-mono text-[10.5px] leading-[1.75] sm:text-[11.5px]">
          {code.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-4 w-4 shrink-0 text-right text-subtle/60">{i + 1}</span>
              <span className="whitespace-pre">
                {line.map(([kind, text], j) => (
                  <span key={j} className={tone[kind]}>
                    {text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </pre>
      </div>

      <div className="animate-float relative z-10 -mt-8 ml-auto w-[78%] rounded-xl border border-line-strong bg-surface-strong/95 p-3.5 shadow-2xl shadow-black/30 sm:-mt-10 sm:w-[64%]">
        <p className="mb-2.5 flex items-center justify-between font-mono text-[10px] tracking-wider text-subtle uppercase">
          Trace · körning #42
          <span className="rounded bg-green/15 px-1.5 text-green">faithfulness 0.94</span>
        </p>
        <ul className="space-y-1.5">
          {trace.map((t) => (
            <li key={t.label} className="flex items-center gap-2 font-mono text-[10.5px]">
              <span className={`h-1.5 w-1.5 rounded-full ${t.ok ? "bg-green" : "bg-gold"}`} />
              <span className="flex-1 truncate text-fg/85">{t.label}</span>
              <span className={t.ok ? "text-subtle" : "text-gold"}>{t.ms}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
