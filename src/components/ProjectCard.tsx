import Image from "next/image";
import { isPlaceholder, type Project } from "@/data/content";
import AgentMockup from "./mockups/AgentMockup";
import AiFocusGraph from "./mockups/AiFocusGraph";
import PlatformMockup from "./mockups/PlatformMockup";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";

const labelClass = "text-sm font-medium text-fg";

/**
 * Ett projekt berättat som en kort historia. Projekt med riktig skärmdump visas som
 * huvudprojekt med stor bild; övriga får text och kodritad visualisering sida vid sida.
 */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { image } = project;

  const header = (
    <div>
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
        {project.period && <span className="tabular-nums">{project.period}</span>}
        {project.ongoing && !project.period?.includes("Pågående") && (
          <span className="inline-flex items-center gap-1.5 text-green">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            Pågående
          </span>
        )}
      </p>
      <h3 className="mt-3 font-display text-4xl font-medium tracking-[-0.025em] sm:text-5xl">{project.title}</h3>
      {project.role && <p className="mt-2 text-gold">{project.role}</p>}
      <p className="accent mt-5 max-w-xl text-2xl leading-snug text-fg/90 sm:text-[1.7rem]">{project.tagline}</p>
    </div>
  );

  const problem = (
    <div>
      <p className={labelClass}>{project.problemLabel ?? "Varför"}</p>
      <p className="mt-2 leading-relaxed text-muted text-pretty">{project.problem}</p>
    </div>
  );

  const bullets = (
    <div>
      <p className={labelClass}>{project.bulletsLabel ?? "Vad jag har byggt"}</p>
      <ul className="mt-3 space-y-3">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 leading-relaxed text-muted">
            <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-gold/70" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );

  const outcomes = (
    <div>
      <p className={labelClass}>{project.outcomesLabel ?? "I korthet"}</p>
      <ul className="mt-3 space-y-2">
        {project.outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-2.5 leading-relaxed">
            <Icon name="check" width={16} height={16} className="mt-1 shrink-0 text-gold" />
            {outcome}
          </li>
        ))}
      </ul>
    </div>
  );

  const footer = (
    <div>
      <p className="text-sm leading-relaxed text-subtle">{project.tags.join(" · ")}</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        {project.links.map((link) => {
          const icon = link.label === "GitHub" ? "github" : "external";
          if (isPlaceholder(link.href)) {
            return (
              <span key={link.label} className="inline-flex items-center gap-2 text-sm text-subtle">
                <Icon name={icon} width={16} height={16} />
                {link.label} kommer snart
              </span>
            );
          }
          return (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary group text-sm">
              <Icon name={icon} width={16} height={16} />
              {link.label}
              <span className="sr-only"> (öppnas i ny flik)</span>
            </a>
          );
        })}
      </div>
      {project.linkNote && <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{project.linkNote}</p>}
    </div>
  );

  // Huvudprojekt: rubrik, stor bild och sedan berättelsen i två kolumner
  if (image) {
    return (
      <Reveal as="article">
        {header}
        <figure className="group/bild relative mt-10 sm:mt-14">
          <div aria-hidden className="glow-gold absolute -inset-x-10 -inset-y-16 -z-10 opacity-70" />
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow)] ring-1 ring-line">
            <Image
              src={image.src}
              alt={`Skärmdump av ${image.caption}`}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1152px) 1088px, 100vw"
              className={`block h-auto w-full transition-transform duration-[1.2s] ease-out group-hover/bild:scale-[1.01] ${image.srcLight ? "light:hidden" : ""}`}
            />
            {image.srcLight && (
              <Image
                src={image.srcLight}
                alt={`Skärmdump av ${image.caption} i ljust tema`}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1152px) 1088px, 100vw"
                className="hidden h-auto w-full transition-transform duration-[1.2s] ease-out group-hover/bild:scale-[1.01] light:block"
              />
            )}
          </div>
          <figcaption className="mt-3 text-sm text-subtle">{image.caption}</figcaption>
        </figure>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-8">
            {problem}
            {outcomes}
          </div>
          <div className="space-y-10">
            {bullets}
            {footer}
          </div>
        </div>
      </Reveal>
    );
  }

  // Övriga projekt: smalare text bredvid en större visualisering
  return (
    <Reveal as="article" className="grid gap-12 lg:grid-cols-12 lg:gap-10">
      <div className={`space-y-9 lg:col-span-5 ${index % 2 ? "lg:order-2" : ""}`}>
        {header}
        {problem}
        {bullets}
        {outcomes}
        {footer}
      </div>
      <div className="relative lg:col-span-7 lg:pt-6">
        <div aria-hidden className="glow-cyan absolute inset-0 -z-10 opacity-60" />
        <div className="space-y-12 lg:sticky lg:top-28">
          {project.mockup === "agent" ? (
            <>
              <AiFocusGraph />
              <AgentMockup />
            </>
          ) : (
            <PlatformMockup />
          )}
        </div>
      </div>
    </Reveal>
  );
}
