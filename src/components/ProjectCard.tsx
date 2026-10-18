"use client";

import { useRef, type PointerEvent } from "react";
import { isPlaceholder, type Project } from "@/data/content";
import Icon from "./ui/Icon";

const MAX_TILT = 6; // grader

export default function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const ref = useRef<HTMLElement>(null);

  // Uppdaterar CSS-variabler direkt – ingen omrendering av React vid musrörelse
  function onPointerMove(e: PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--rx", `${(0.5 - y) * MAX_TILT}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * MAX_TILT}deg`);
  }

  function onPointerLeave() {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  }

  return (
    <article
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 backdrop-blur transition-[transform,border-color] duration-300 ease-out [transform:perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] hover:border-gold/40 sm:p-7"
    >
      {/* Glöd som följer musen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), var(--glow-gold), transparent 45%)",
        }}
      />

      <div className="relative flex flex-wrap items-center gap-2">
        {project.ongoing && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/40 bg-cyan/10 px-2.5 py-0.5 text-xs font-medium text-cyan">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" aria-hidden />
            Pågående
          </span>
        )}
        {project.role && (
          <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-medium text-gold">{project.role}</span>
        )}
      </div>

      <h3 className={`relative mt-4 font-display font-semibold ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
        {project.title}
      </h3>
      {project.period && <p className="relative mt-1 text-sm text-muted">{project.period}</p>}

      <div className="relative mt-3 flex-1 text-muted">
        {project.description && <p className="leading-relaxed">{project.description}</p>}
        {project.bullets && (
          <ul className="mt-3 space-y-2">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 leading-relaxed">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {project.tags && project.tags.length > 0 && (
        <ul className="relative mt-5 flex flex-wrap gap-2" aria-label="Teknik">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-md border border-line bg-bg-soft/60 px-2 py-1 font-mono text-xs text-fg/80">
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className="relative mt-6 flex flex-wrap gap-4">
        {project.links.map((link) =>
          isPlaceholder(link.href) ? (
            <span key={link.label} className="text-sm text-muted italic" title="Länk saknas – fyll i i content.ts">
              {link.label}: {link.href}
            </span>
          ) : (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gold underline-offset-4 hover:underline"
            >
              {link.label}
              <Icon name={link.label === "GitHub" ? "github" : "external"} width={16} height={16} />
              <span className="sr-only">(öppnas i ny flik) – {project.title}</span>
            </a>
          ),
        )}
      </div>
    </article>
  );
}
