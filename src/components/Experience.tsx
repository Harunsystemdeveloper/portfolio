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
    <Section id="erfarenhet" eyebrow="Erfarenhet" title="Resan hittills">
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
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="font-display text-lg font-semibold sm:text-xl">{item.role}</h3>
                {item.current && (
                  <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-medium text-gold">Pågående</span>
                )}
              </div>
              <p className="mt-1 text-sm">
                <span className="text-cyan">{item.company}</span>
                {!item.current && <span className="text-muted"> · {item.period}</span>}
              </p>
              <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
