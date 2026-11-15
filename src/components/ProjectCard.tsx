import Image from "next/image";
import { isPlaceholder, type Project } from "@/data/content";
import AgentMockup from "./mockups/AgentMockup";
import PlatformMockup from "./mockups/PlatformMockup";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;

  return (
    <Reveal as="article" className="card spot overflow-hidden !rounded-[2rem]">
      <div className={`grid lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
        {/* Visuell del: riktig skärmdump om den finns, annars en kodritad mockup */}
        <div className="relative isolate overflow-hidden border-b border-line bg-bg-soft/60 p-5 sm:p-8 lg:border-b-0 lg:p-10">
          <div
            aria-hidden
            className={`absolute -z-10 h-[30rem] w-[30rem] ${
              project.mockup === "agent" ? "-top-40 -left-40 glow-cyan" : "-right-40 -bottom-40 glow-gold"
            }`}
          />
          <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
          <div className="flex h-full items-center">
            {project.image ? (
              <Image
                src={project.image}
                alt={`Skärmdump av ${project.title}`}
                width={1600}
                height={1000}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="w-full rounded-xl border border-line shadow-2xl"
              />
            ) : project.mockup === "agent" ? (
              <AgentMockup />
            ) : (
              <PlatformMockup />
            )}
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted">
            <span className="text-subtle">0{index + 1}</span>
            {project.period && <span>{project.period}</span>}
            {project.ongoing && (
              <span className="flex items-center gap-1.5 rounded-full bg-green/15 px-2.5 py-0.5 text-green">
                <span className="h-1.5 w-1.5 rounded-full bg-green" />
                Pågående
              </span>
            )}
          </div>

          <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{project.title}</h3>
          {project.role && <p className="mt-1 text-gold">{project.role}</p>}
          <p className="mt-4 text-lg leading-snug text-fg/90 text-pretty">{project.tagline}</p>

          <dl className="mt-7 space-y-6">
            <div>
              <dt className="font-mono text-[11px] tracking-[0.15em] text-cyan uppercase">{project.problemLabel ?? "Utmaningen"}</dt>
              <dd className="mt-2 leading-relaxed text-muted text-pretty">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-[0.15em] text-cyan uppercase">{project.bulletsLabel ?? "Vad jag byggt"}</dt>
              <dd className="mt-2">
                <ul className="space-y-2">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-gold/70" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-[0.15em] text-cyan uppercase">{project.outcomesLabel ?? "Resultat"}</dt>
              <dd className="mt-3">
                <ul className="grid gap-2">
                  {project.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-3 rounded-xl border border-line bg-bg-soft/50 px-3.5 py-2.5 text-sm font-medium"
                    >
                      <Icon name="check" width={16} height={16} className="mt-0.5 shrink-0 text-green" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <ul className="mt-7 flex flex-wrap gap-1.5" aria-label="Teknik">
            {project.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6 lg:mt-auto">
            {project.links.map((link, i) => {
              const missing = isPlaceholder(link.href);
              const icon = link.label === "GitHub" ? "github" : "external";
              if (missing) {
                return (
                  <span
                    key={link.label}
                    className="btn cursor-not-allowed border border-dashed border-line-strong text-sm text-subtle"
                    title="Länken läggs till snart"
                  >
                    <Icon name={icon} width={16} height={16} />
                    {link.label} – kommer snart
                  </span>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn group text-sm ${i === 0 ? "btn-primary" : "btn-ghost"}`}
                >
                  <Icon name={icon} width={16} height={16} />
                  {link.label}
                  <span className="sr-only"> (öppnas i ny flik)</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
