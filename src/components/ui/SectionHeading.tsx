import type { ReactNode } from "react";

type Props = { id: string; eyebrow: string; title: ReactNode; lead?: string; className?: string };

/** Sektionsrubrik: en liten etikett, en rubrik med ett kursivt accentord och en valfri ingress. */
export default function SectionHeading({ id, eyebrow, title, lead, className = "" }: Props) {
  return (
    <div className={`mb-12 max-w-2xl sm:mb-16 ${className}`}>
      <p className="mb-4 text-sm text-gold">{eyebrow}</p>
      <h2
        id={id}
        className="font-display text-[2.1rem] leading-[1.08] font-medium tracking-[-0.02em] text-balance sm:text-5xl"
      >
        {title}
      </h2>
      {lead && <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted text-pretty">{lead}</p>}
    </div>
  );
}
