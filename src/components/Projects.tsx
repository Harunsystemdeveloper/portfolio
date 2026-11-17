import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";
import Section from "./ui/Section";

export default function Projects() {
  return (
    <Section
      id="projekt"
      eyebrow="Projekt"
      title={
        <>
          Från idé till <span className="accent text-gold">fungerande produkt</span>
        </>
      }
      lead="Egna projekt där jag tar idéer hela vägen från arkitektur till något som faktiskt körs."
      className="pt-16 pb-20 sm:pt-24 sm:pb-32"
    >
      <div className="space-y-24 sm:space-y-36">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
