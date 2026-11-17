import { about, aboutFacts, learningNow } from "@/data/content";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function About() {
  const [intro, ...rest] = about;

  return (
    <Section
      id="om-mig"
      eyebrow="Om mig"
      title={
        <>
          Utvecklare med fokus på <span className="accent text-gold">verklig nytta</span>
        </>
      }
      className="pt-20 pb-16 sm:pt-28 sm:pb-24"
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Löptext: det personliga först, som en människa skulle berätta det */}
        <div className="lg:col-span-7">
          <p className="font-display text-2xl leading-snug text-fg text-pretty sm:text-[1.75rem]">{intro}</p>
          {rest.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">
              {paragraph}
            </p>
          ))}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">{learningNow}</p>
        </div>

        {/* Fakta som en enkel lista, utan kort och ikoner */}
        <dl className="lg:col-span-5 lg:pt-2">
          {aboutFacts.map((fact, i) => (
            <Reveal key={fact.label} delay={0.08 * i} className="border-t border-line py-5 first:border-t-0 first:pt-0 lg:first:pt-1">
              <dt className="text-sm text-gold">{fact.label}</dt>
              <dd className="mt-1.5">
                <span className="block font-medium">{fact.title}</span>
                {fact.lines.map((line) => (
                  <span key={line} className="mt-1 block text-[15px] leading-relaxed text-muted">
                    {line}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
