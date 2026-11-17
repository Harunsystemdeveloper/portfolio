import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  /** Extra klasser på sektionen, t.ex. för att variera luften mellan sektioner */
  className?: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, lead, className = "py-16 sm:py-24", children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-rubrik`} className={`mx-auto max-w-6xl px-5 sm:px-8 ${className}`}>
      <SectionHeading id={`${id}-rubrik`} eyebrow={eyebrow} title={title} lead={lead} />
      {children}
    </section>
  );
}
