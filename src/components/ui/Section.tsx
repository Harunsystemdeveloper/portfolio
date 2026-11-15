import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

type Props = { id: string; index: string; eyebrow: string; title: ReactNode; lead?: string; children: ReactNode };

export default function Section({ id, index, eyebrow, title, lead, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-rubrik`} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-32">
      <SectionHeading id={`${id}-rubrik`} index={index} eyebrow={eyebrow} title={title} lead={lead} />
      {children}
    </section>
  );
}
