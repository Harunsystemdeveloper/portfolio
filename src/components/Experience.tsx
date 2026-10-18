"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/content";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <Section id="erfarenhet" eyebrow="Arbetslivserfarenhet" title="Resan hittills">
      <ol ref={listRef} className="relative ml-2 space-y-10 sm:ml-4">
        {/* Bakgrundslinje + linje som ritas upp i takt med scroll */}
        <span aria-hidden className="absolute top-2 bottom-2 left-0 w-px bg-line" />
        <motion.span
          aria-hidden
          className="absolute top-2 bottom-2 left-0 w-px origin-top bg-gradient-to-b from-gold via-gold to-cyan shadow-[0_0_12px_var(--glow-gold)]"
          style={{ scaleY: reducedMotion ? 1 : progress }}
        />

        {experiences.map((item, i) => (
          <Reveal as="li" key={`${item.company}-${i}`} delay={0.05} className="relative pl-8 sm:pl-12">
            <span
              aria-hidden
              className={`absolute top-1.5 -left-[7px] h-[15px] w-[15px] rounded-full border-2 ${
                item.current ? "border-gold bg-gold shadow-[0_0_14px_var(--glow-gold)]" : "border-cyan bg-bg"
              }`}
            />
            <div className="rounded-2xl border border-line bg-surface p-5 backdrop-blur transition hover:border-gold/40 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold sm:text-xl">
                  {item.company}
                  {item.context && <span className="font-sans text-base font-normal text-muted"> · {item.context}</span>}
                </h3>
                <p className="text-sm text-muted">
                  {item.period}
                  {item.location && ` · ${item.location}`}
                </p>
              </div>
              <p className="mt-1 flex flex-wrap items-center gap-2 font-medium text-gold">
                {item.role}
                {item.current && (
                  <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-medium">Pågående</span>
                )}
              </p>
              <ul className="mt-3 space-y-2 text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-relaxed">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
