import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = { id: string; index: string; eyebrow: string; title: ReactNode; lead?: string };

export default function SectionHeading({ id, index, eyebrow, title, lead }: Props) {
  return (
    <Reveal className="mb-12 max-w-3xl sm:mb-16">
      <p className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-cyan uppercase">
        <span className="text-subtle">{index}</span>
        <span aria-hidden className="h-px w-8 bg-cyan/50" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-display text-4xl leading-[1.02] font-semibold tracking-[-0.03em] text-balance sm:text-5xl md:text-6xl"
      >
        {title}
      </h2>
      {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{lead}</p>}
    </Reveal>
  );
}
