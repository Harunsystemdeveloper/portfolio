import { about, aboutFacts, exploring } from "@/data/content";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

const factIcons: Record<string, string> = {
  Utbildning: "cap",
  Språk: "globe",
  Intressen: "heart",
  Plats: "pin",
};

export default function About() {
  return (
    <Section
      id="om-mig"
      index="01"
      eyebrow="Om mig"
      title={
        <>
          Byggare med fokus på <span className="text-gradient">verklig nytta</span>
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-6">
        <Reveal className="card spot p-7 sm:p-9 md:col-span-4 md:row-span-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted text-pretty sm:text-xl">
            {about.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "font-display text-2xl leading-snug font-medium text-fg sm:text-3xl" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="card spot ring-gradient p-6 md:col-span-2 md:row-span-2">
          <p className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-cyan uppercase">
            <span className="relative flex h-2 w-2">
              <span className="motion-pulse absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Utforskar just nu
          </p>
          <ul className="mt-5 space-y-3">
            {exploring.map((item, i) => (
              <li key={item} className="flex items-center gap-3 border-b border-line pb-3 last:border-0 last:pb-0">
                <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {aboutFacts.map((fact, i) => (
          <Reveal key={fact.label} delay={0.06 * i} className="card spot p-5 md:col-span-3 lg:col-span-3">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-bg-soft text-gold">
                <Icon name={factIcons[fact.label] ?? "spark"} width={18} height={18} />
              </span>
              <div>
                <p className="font-mono text-[11px] tracking-[0.15em] text-subtle uppercase">{fact.label}</p>
                <p className="mt-1 font-medium">{fact.value}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
