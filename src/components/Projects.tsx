import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";
import Section from "./ui/Section";

export default function Projects() {
  return (
    <Section
      id="projekt"
      index="03"
      eyebrow="Utvalda case"
      title={
        <>
          Från idé till <span className="text-gradient">fungerande produkt</span>
        </>
      }
      lead="Egna projekt där jag tar idéer hela vägen från arkitektur till fungerande produkt."
    >
      <div className="space-y-8 sm:space-y-12">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
