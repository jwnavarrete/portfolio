import { data } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import ButtonAsLink from "./ButtonAsLink";

interface ProjectsProps {
  showAll?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ showAll }) => {
  return (
    <section className="wrapper section-padding" id="projects">
      <SectionTitle title="Projects" />

      <div className="cards-wrapper mt-20 flex flex-col gap-20">
        {!showAll &&
          data
            .filter((_, i) => i <= 3)
            .map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                image={project.image}
                description={project.description}
                tech={project.tech}
                live={project.liveLink}
                front={project.frontend}
                back={project.backend}
                full={project.fullstack}
              />
            ))}

        {showAll &&
          data.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              tech={project.tech}
              live={project.liveLink}
              front={project.frontend}
              back={project.backend}
              full={project.fullstack}
            />
          ))}
      </div>

      {!showAll && (
        <div className="mt-20 text-2xl flex md:justify-center">
          <ButtonAsLink href="/projects" placeholder="View All Projects" />
        </div>
      )}
    </section>
  );
};

export default Projects;
