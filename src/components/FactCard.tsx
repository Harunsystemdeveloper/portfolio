import type { CSSProperties } from "react";
import type { AboutFact } from "@/data/content";
import Icon from "./ui/Icon";

/** Nivåmätare med tre prickar, t.ex. för språk */
function Level({ level }: { level: number }) {
  return (
    <span aria-hidden className="flex gap-1">
      {[1, 2, 3].map((dot) => (
        <span
          key={dot}
          className={`h-1.5 w-1.5 rounded-full ${dot <= level ? "bg-[var(--accent)]" : "bg-line-strong"}`}
        />
      ))}
    </span>
  );
}

export default function FactCard({ fact, index }: { fact: AboutFact; index: number }) {
  const hasLevels = fact.details.some((d) => d.level);

  return (
    <article
      className="card spot fact-card group flex h-full flex-col overflow-hidden p-6 sm:p-8"
      style={{ "--accent": `var(--${fact.accent})` } as CSSProperties}
    >
      {/* Accentlinje i överkanten som tänds vid hover */}
      <span
        aria-hidden
        className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="flex items-center gap-4">
        <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[color-mix(in_srgb,var(--accent)_35%,transparent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-[var(--accent)] transition-transform duration-500 group-hover:-rotate-6">
          <Icon name={fact.icon} width={22} height={22} />
        </span>
        <h3 className="font-mono text-[11px] tracking-[0.2em] text-[var(--accent)] uppercase">{fact.label}</h3>
        <span aria-hidden className="ml-auto font-mono text-xs text-subtle">
          0{index + 1}
        </span>
      </div>

      <p className="mt-7 font-display text-2xl leading-tight font-semibold tracking-tight">{fact.title}</p>

      <ul className={`mt-4 ${hasLevels ? "space-y-2.5" : "space-y-1.5"}`}>
        {fact.details.map((detail) => (
          <li key={detail.name} className="flex items-baseline gap-3 text-[15px]">
            {hasLevels ? (
              <>
                <span className="w-20 shrink-0 font-medium">{detail.name}</span>
                {detail.level && <Level level={detail.level} />}
                <span className="text-muted">{detail.value}</span>
              </>
            ) : (
              <>
                <span aria-hidden className="h-1 w-1 shrink-0 translate-y-[-3px] rounded-full bg-[var(--accent)]" />
                <span>
                  <span className={detail.value ? "font-medium" : "text-muted"}>{detail.name}</span>
                  {detail.value && <span className="text-muted"> – {detail.value}</span>}
                </span>
              </>
            )}
          </li>
        ))}
      </ul>

      {fact.note && (
        <div className="mt-auto pt-6">
          <p className="flex items-start gap-2 border-t border-line pt-4 text-sm leading-relaxed text-muted">
            <Icon name="spark" width={14} height={14} className="mt-[3px] shrink-0 text-[var(--accent)]" />
            {fact.note}
          </p>
        </div>
      )}
    </article>
  );
}
