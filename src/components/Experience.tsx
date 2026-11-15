import { experiences } from "@/data/content";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function Experience() {
  return (
    <Section
      id="erfarenhet"
      index="02"
      eyebrow="Erfarenhet"
      title={
        <>
          Från fullstack till <span className="text-gradient">moln och AI</span>
        </>
      }
      lead="Fem arbetsgivare, en röd tråd: att bygga lösningar som fungerar i verkligheten. Klicka på en roll för detaljerna."
    >
      <ol className="relative">
        {/* Tidslinjen: en svag bas och en färgad linje som fylls i när man scrollar */}
        <span aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-line md:left-[calc(12rem+7px)]" />
        <span
          aria-hidden
          className="timeline-fill absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-gold via-cyan to-cyan/0 md:left-[calc(12rem+7px)]"
        />

        {experiences.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${job.role}`} delay={0.04 * i} className="relative pb-6 pl-9 last:pb-0 md:grid md:grid-cols-[12rem_1fr] md:pl-0">
            <div className="mb-3 md:mb-0 md:pt-6 md:pr-10 md:text-right">
              <p className="font-mono text-xs tracking-wide text-muted">{job.period}</p>
              {job.location && <p className="mt-1 font-mono text-xs text-subtle">{job.location}</p>}
            </div>

            <span
              aria-hidden
              className={`absolute top-1.5 left-0 grid h-[15px] w-[15px] place-items-center rounded-full border md:top-7 md:left-[12rem] ${
                job.current ? "border-green bg-green/20" : "border-line-strong bg-bg"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${job.current ? "bg-green" : "bg-subtle"}`} />
              {job.current && (
                <span className="motion-pulse absolute inset-0 animate-ping rounded-full border border-green opacity-60" />
              )}
            </span>

            <details className="card spot group md:ml-10" open={job.current}>
              <summary className="cursor-pointer rounded-[inherit] p-5 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{job.role}</h3>
                      {job.current && (
                        <span className="rounded-full bg-green/15 px-2.5 py-0.5 font-mono text-[11px] text-green">Nu</span>
                      )}
                    </div>
                    <p className="mt-1 text-gold">
                      {job.company}
                      {job.context && <span className="text-muted"> · {job.context}</span>}
                    </p>
                    <p className="mt-4 max-w-2xl leading-relaxed text-fg/90 text-pretty">{job.highlight}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tekniker och områden">
                      {job.tags.map((tag) => (
                        <li key={tag} className="chip">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition group-open:rotate-45 group-hover:border-cyan group-hover:text-cyan">
                    <Icon name="plus" width={16} height={16} />
                    <span className="sr-only">Visa detaljer</span>
                  </span>
                </div>
              </summary>
              <ul className="space-y-2.5 border-t border-line px-5 py-5 sm:px-7">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-cyan/60" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </details>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
