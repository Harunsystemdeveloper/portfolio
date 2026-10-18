import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function Projects() {
  return (
    <Section id="projekt" eyebrow="Projekt" title="Saker jag har byggt – och bygger">
      <ul className="grid gap-5 md:grid-cols-2 lg:gap-6">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.title} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
            <ProjectCard project={project} featured={i === 0} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
