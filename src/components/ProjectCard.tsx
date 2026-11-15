import Image from "next/image";
import { isPlaceholder, type Project } from "@/data/content";
import AgentMockup from "./mockups/AgentMockup";
import AiFocusGraph from "./mockups/AiFocusGraph";
import PlatformMockup from "./mockups/PlatformMockup";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";

const labelClass = "font-mono text-[11px] tracking-[0.15em] text-cyan uppercase";

/**
 * Case study-kort. Projekt med riktig skärmdump visar bilden som en bred banner överst
 * med texten i två kolumner under; övriga visar en kodritad mockup bredvid texten.
 */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { image } = project;
  const flip = index % 2 === 1;

  const visual = (
    <div className="relative isolate overflow-hidden border-b border-line bg-bg-soft/60 p-5 sm:p-8 lg:p-10">
      <div
        aria-hidden
        className={`absolute -z-10 h-[30rem] w-[30rem] ${
          project.mockup === "agent" ? "-top-40 -left-40 glow-cyan" : "-right-40 -bottom-40 glow-gold"
        }`}
      />
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="flex h-full items-center">
        {image ? (
          <figure className="mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-line-strong bg-surface-strong shadow-2xl shadow-black/30 transition-transform duration-700 group-hover/card:scale-[1.01]">
            <figcaption className="flex items-center gap-3 border-b border-line px-4 py-2.5">
              <span aria-hidden className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </span>
              <span className="flex-1 rounded-md bg-bg-soft px-3 py-0.5 text-center font-mono text-[10px] text-subtle">
                {image.caption}
              </span>
            </figcaption>
            {/* Mörk bild i mörkt tema, ljus i ljust tema (dolda bilder laddas inte) */}
            <Image
              src={image.src}
              alt={`Skärmdump av ${image.caption}`}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1152px) 1024px, 100vw"
              className={`block h-auto w-full ${image.srcLight ? "light:hidden" : ""}`}
            />
            {image.srcLight && (
              <Image
                src={image.srcLight}
                alt={`Skärmdump av ${image.caption} i ljust tema`}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1152px) 1024px, 100vw"
                className="hidden h-auto w-full light:block"
              />
            )}
          </figure>
        ) : project.mockup === "agent" ? (
          <div className="w-full space-y-10">
            <AiFocusGraph />
            <AgentMockup />
          </div>
        ) : (
          <PlatformMockup />
        )}
      </div>
    </div>
  );

  const header = (
    <div>
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
    </div>
  );

  const details = (
    <dl className="space-y-6">
      <div>
        <dt className={labelClass}>{project.problemLabel ?? "Utmaningen"}</dt>
        <dd className="mt-2 leading-relaxed text-muted text-pretty">{project.problem}</dd>
      </div>
      <div>
        <dt className={labelClass}>{project.bulletsLabel ?? "Vad jag byggt"}</dt>
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
        <dt className={labelClass}>{project.outcomesLabel ?? "Resultat"}</dt>
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
  );

  const tags = (
    <ul className="flex flex-wrap gap-1.5" aria-label="Teknik">
      {project.tags.map((tag) => (
        <li key={tag} className="chip">
          {tag}
        </li>
      ))}
    </ul>
  );

  const links = (
    <div className="flex flex-wrap gap-3 border-t border-line pt-6">
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
  );

  if (image) {
    return (
      <Reveal as="article" className="card spot group/card overflow-hidden !rounded-[2rem]">
        {visual}
        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-7">
            {header}
            {tags}
            <div className="lg:mt-auto">{links}</div>
          </div>
          {details}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal as="article" className="card spot group/card overflow-hidden !rounded-[2rem]">
      <div className={`grid lg:grid-cols-2 lg:[&>*:first-child]:border-b-0 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
        {visual}
        <div className="flex flex-col p-6 sm:p-10">
          {header}
          <div className="mt-7">{details}</div>
          <div className="mt-7">{tags}</div>
          <div className="mt-8 lg:mt-auto lg:pt-8">{links}</div>
        </div>
      </div>
    </Reveal>
  );
}
