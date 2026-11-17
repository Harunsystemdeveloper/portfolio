import { aiInPractice, skillGroups } from "@/data/content";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function Skills() {
  const [ai, ...others] = skillGroups;

  return (
    <Section
      id="kompetenser"
      eyebrow="Kompetenser"
      title={
        <>
          Det jag jobbar med, <span className="accent text-gold">från backend till AI</span>
        </>
      }
      className="py-16 sm:py-24"
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        {/* AI först och störst, eftersom det är där fokus ligger just nu */}
        <Reveal className="card p-7 sm:p-9 lg:col-span-5 lg:self-start">
          <p className="text-sm text-gold">Fokus just nu</p>
          <h3 className="mt-2 font-display text-3xl font-medium tracking-tight">{ai.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{ai.note}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {ai.skills.map((skill) => (
              <li key={skill} className="chip !text-fg">
                {skill}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <p className="text-sm font-medium">Använt i praktiken</p>
            <ul className="mt-3 space-y-3">
              {aiInPractice.map((item) => (
                <li key={item.where} className="text-[15px] leading-relaxed">
                  <span className="text-fg">{item.where}</span>
                  <span className="block text-muted">{item.what}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Övriga grupper som enkla listor */}
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-7 lg:pt-4">
          {others.map((group, i) => (
            <Reveal key={group.title} delay={0.06 * i}>
              <h3 className="font-display text-xl font-medium tracking-tight">{group.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{group.note}</p>
              <ul className="mt-4 space-y-1.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-[15px]">
                    <span aria-hidden className="h-1 w-1 rounded-full bg-gold/80" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
