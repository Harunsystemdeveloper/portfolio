import { aiInPractice, skillGroups } from "@/data/content";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

// Placering i bento-rutnätet: AI är störst eftersom det är mitt fokus just nu
const layout = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
];

const marquee = skillGroups.flatMap((group) => group.skills);

export default function Skills() {
  return (
    <Section
      id="kompetenser"
      index="04"
      eyebrow="Kompetenser"
      title={
        <>
          Verktygslådan – <span className="text-gradient">från backend till AI</span>
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-6">
        {skillGroups.map((group, i) => {
          const featured = i === 0;
          return (
            <Reveal
              key={group.title}
              delay={0.06 * i}
              className={`card spot flex flex-col p-6 sm:p-7 ${layout[i]} ${featured ? "ring-gradient overflow-hidden" : ""}`}
            >
              {featured && (
                <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72">
                  <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-line-strong" />
                  <div className="absolute inset-10 rounded-full border border-line" />
                  <div className="glow-cyan absolute inset-6" />
                </div>
              )}

              <div className="relative flex items-start justify-between gap-4">
                <span
                  className={`grid place-items-center rounded-2xl border border-line ${
                    featured ? "h-14 w-14 bg-gradient-to-br from-gold/25 to-cyan/25 text-fg" : "h-11 w-11 bg-bg-soft text-cyan"
                  }`}
                >
                  <Icon name={group.icon} width={featured ? 26 : 20} height={featured ? 26 : 20} />
                </span>
                <span className="font-mono text-xs text-subtle">
                  {String(group.skills.length).padStart(2, "0")} {featured && <span className="ml-2 rounded-full bg-cyan/15 px-2 py-0.5 text-cyan">Fokus nu</span>}
                </span>
              </div>

              <h3
                className={`relative mt-6 font-display font-semibold tracking-tight ${featured ? "text-3xl sm:text-4xl" : "text-xl"}`}
              >
                {group.title}
              </h3>
              <p className={`relative mt-2 text-muted text-pretty ${featured ? "max-w-md text-lg" : "text-sm"}`}>{group.note}</p>

              {featured && (
                <div className="relative mt-8">
                  <p className="font-mono text-[11px] tracking-[0.15em] text-subtle uppercase">Använt i praktiken</p>
                  <ul className="mt-3 divide-y divide-line rounded-2xl border border-line bg-bg-soft/50">
                    {aiInPractice.map((item) => (
                      <li key={item.where} className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
                        <span className="w-32 shrink-0 text-sm font-medium text-gold">{item.where}</span>
                        <span className="text-sm text-muted">{item.what}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ul className={`relative mt-6 flex flex-wrap gap-1.5 ${featured ? "md:mt-auto md:pt-10" : "mt-auto pt-6"}`}>
                {group.skills.map((skill) => (
                  <li key={skill} className={`chip ${featured ? "!text-[13px] !text-fg" : ""}`}>
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>

      {/* Löpande band med alla tekniker – rent dekorativt */}
      <div
        aria-hidden
        className="mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]"
      >
        <div className="animate-marquee flex w-max gap-10 font-display text-2xl font-medium text-subtle/70 sm:text-3xl">
          {[...marquee, ...marquee].map((skill, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              {skill}
              <span className="text-gold/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
