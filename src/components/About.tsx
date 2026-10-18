import { about, aboutFacts } from "@/data/content";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function About() {
  return (
    <Section id="om-mig" eyebrow="Om mig" title="Byggare med fokus på verklig nytta">
      <div className="grid gap-10 md:grid-cols-5 md:gap-14">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg md:col-span-3">
          {about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15} className="md:col-span-2">
          <dl className="divide-y divide-line rounded-2xl border border-line bg-surface p-2 backdrop-blur">
            {aboutFacts.map((fact) => (
              <div key={fact.label} className="px-4 py-4">
                <dt className="text-xs tracking-wider text-cyan uppercase">{fact.label}</dt>
                <dd className="mt-1 font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
