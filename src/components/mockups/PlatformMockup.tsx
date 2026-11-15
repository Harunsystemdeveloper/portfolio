// Kodritad "skärmdump" av en rekryteringsplattform: kandidater med matchningspoäng och en pipeline.
const candidates = [
  { initials: "AL", role: "Backend-utvecklare", score: 94 },
  { initials: "MS", role: "Fullstack · .NET", score: 87 },
  { initials: "JK", role: "Cloud Engineer", score: 78 },
  { initials: "SE", role: "Frontend · React", score: 64 },
];

const pipeline = [
  { label: "Ny", count: 24 },
  { label: "Intervju", count: 8 },
  { label: "Erbjudande", count: 2 },
];

export default function PlatformMockup() {
  return (
    <div aria-hidden className="w-full select-none">
      <div className="overflow-hidden rounded-xl border border-line-strong bg-surface-strong shadow-2xl shadow-black/30">
        <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="flex-1 rounded-md bg-bg-soft px-3 py-0.5 text-center font-mono text-[10px] text-subtle">
            Rekryo · Kandidater
          </span>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-4 p-4">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[12px] font-semibold">Bästa matchningar</p>
              <span className="rounded-md bg-gold/15 px-1.5 py-0.5 font-mono text-[9px] text-gold">AI-rankad</span>
            </div>
            <ul className="space-y-2.5">
              {candidates.map((c) => (
                <li key={c.initials} className="flex items-center gap-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold/40 to-cyan/40 text-[9px] font-bold">
                    {c.initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[11px] font-medium">{c.role}</span>
                    <span className="mt-1 block h-1 overflow-hidden rounded-full bg-bg-soft">
                      <span
                        className="block h-full rounded-full bg-gradient-to-r from-gold to-cyan"
                        style={{ width: `${c.score}%` }}
                      />
                    </span>
                  </span>
                  <span className="w-8 text-right font-mono text-[11px] text-cyan">{c.score}%</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden w-28 space-y-2 sm:block">
            <p className="text-[12px] font-semibold">Pipeline</p>
            {pipeline.map((step) => (
              <div key={step.label} className="rounded-lg border border-line bg-bg-soft/60 px-2.5 py-2">
                <p className="font-mono text-[9px] text-subtle uppercase">{step.label}</p>
                <p className="font-display text-lg font-semibold">{step.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="animate-float relative z-10 -mt-8 w-[70%] rounded-xl border border-line-strong bg-surface-strong/95 p-3.5 shadow-2xl shadow-black/30 sm:-mt-10 sm:w-[56%]">
        <p className="font-mono text-[10px] tracking-wider text-subtle uppercase">CV-analys klar</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {["C#", "Azure", "SQL", "React"].map((skill) => (
            <span key={skill} className="rounded-md border border-cyan/30 bg-cyan/10 px-1.5 py-0.5 font-mono text-[10px] text-cyan">
              {skill}
            </span>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-muted">
          Matchning: <span className="font-semibold text-fg">94 %</span> · Intervju föreslagen
        </p>
      </div>
    </div>
  );
}
