import { skillGroups } from "@/data/content";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function Skills() {
  return (
    <Section id="kompetenser" eyebrow="Kompetenser" title="Verktygslådan">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => {
          const learning = "learning" in group && group.learning;
          return (
            <Reveal as="li" key={group.title} delay={(gi % 3) * 0.07}>
              <div
                className={`h-full rounded-2xl border p-6 backdrop-blur ${
                  learning ? "border-dashed border-cyan/40 bg-cyan/5" : "border-line bg-surface"
                }`}
              >
                <h3 className="flex items-center gap-3 font-display text-lg font-semibold">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-xl ${
                      learning ? "bg-cyan/15 text-cyan" : "bg-gold/15 text-gold"
                    }`}
                  >
                    <Icon name={group.icon} />
                  </span>
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <li
                      key={skill}
                      className="animate-float rounded-full border border-line bg-bg-soft/70 px-3 py-1.5 text-sm"
                      style={{ animationDelay: `${(gi * 3 + si) * -0.7}s` }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
