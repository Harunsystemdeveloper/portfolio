import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
};

/** Tonar och glider in innehållet när det scrollas in i bild (se <RevealRoot />). */
export default function Reveal({ children, delay = 0, className, as: Component = "div" }: Props) {
  return (
    <Component data-reveal className={className} style={{ "--delay": `${delay}s` } as CSSProperties}>
      {children}
    </Component>
  );
}
