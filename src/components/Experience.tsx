import { experiences } from "@/data/content";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function Experience() {
  return (
    <Section
      id="erfarenhet"
      eyebrow="Erfarenhet"
      title={
        <>
          Från fullstack till <span className="accent text-gold">moln och AI</span>
        </>
      }
      lead="Varje roll har gett mig nya verktyg, nya perspektiv och mer erfarenhet av att leverera i riktiga verksamheter. Klicka på en roll för detaljerna."
      className="py-16 sm:py-28"
    >
      <ol>
        {experiences.map((job, i) => (
          <Reveal
            as="li"
            key={`${job.company}-${job.role}`}
            delay={Math.min(i, 3) * 0.05}
            className="border-t border-line last:border-b"
          >
            <details className="group" open={job.current}>
              <summary className="grid cursor-pointer gap-x-10 gap-y-2 py-7 transition-colors md:grid-cols-[11rem_1fr] md:py-9">
                <div className="text-sm text-muted tabular-nums">
                  <p className={job.current ? "text-fg" : ""}>{job.period}</p>
                  {job.location && <p className="mt-0.5 text-subtle">{job.location}</p>}
                </div>

                <div className="min-w-0">
                  <h3 className="font-display text-xl leading-snug font-medium tracking-tight transition-colors group-hover:text-gold sm:text-[1.6rem]">
                    {job.role}
                    {job.current && (
                      <span className="ml-3 inline-flex translate-y-[-3px] items-center gap-1.5 align-middle text-xs font-normal text-green">
                        <span className="h-1.5 w-1.5 rounded-full bg-green" />
                        Nu
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-muted">
                    <span className="text-fg/90">{job.company}</span>
                    {job.context && <span> · {job.context}</span>}
                  </p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-pretty">{job.highlight}</p>
                  <p className="mt-3 text-sm text-subtle">{job.tags.join(" · ")}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-gold">
                    <span className="group-open:hidden">Läs mer</span>
                    <span className="hidden group-open:inline">Visa mindre</span>
                    <Icon name="arrow" width={14} height={14} className="rotate-90 transition-transform group-open:-rotate-90" />
                  </span>
                </div>
              </summary>

              <ul className="space-y-3 pb-9 md:ml-[calc(11rem+2.5rem)]">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex max-w-2xl gap-3 leading-relaxed text-muted">
                    <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-gold/70" />
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
