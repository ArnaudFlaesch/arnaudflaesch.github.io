import RepositoryWidget from "~/components/RepositoryWidget";
import { projectsInfo } from "~/data/ProjectsData";
import type { Locale } from "~/data/SiteData";
import { fetchProjectData } from "~/utils/github";

export default async function ProjectsPage({ locale }: { locale: Locale }) {
  const repositories = await Promise.all(projectsInfo.map((project) => fetchProjectData(project.name)));

  return (
    <div id="projects-list">
      {projectsInfo.map((project, index) => (
        <RepositoryWidget key={project.name} project={project} repository={repositories[index]} locale={locale} />
      ))}
    </div>
  );
}
