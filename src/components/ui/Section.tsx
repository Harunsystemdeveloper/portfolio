import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

type Props = { id: string; eyebrow: string; title: string; children: ReactNode };

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-rubrik`} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading id={`${id}-rubrik`} eyebrow={eyebrow} title={title} />
      {children}
    </section>
  );
}
