import React from "react";
import DefaultLayout from "~/components/DefaultLayout";
import RepositoryWidget from "~/components/RepositoryWidget";
import { projectsInfo } from "~/data/ProjectsData";
import { fetchProjectData } from "~/utils/github";
import { buildMetadata } from "~/utils/seo";

export const metadata = buildMetadata({
  titleCode: "PROJECTS.PAGE.TITLE",
  descriptionCode: "PROJECTS.PAGE.DESCRIPTION",
  path: "/en/projets",
  locale: "en"
});

export default async function ProjectsPageEN() {
  const locale = "en";
  const titleCode = "PROJECTS.PAGE.TITLE";
  const descriptionCode = "PROJECTS.PAGE.DESCRIPTION";
  const projectsData = await Promise.all(
    projectsInfo.map((projectInfo) => fetchProjectData(projectInfo.name))
  );

  return (
    <div className="layout-container">
      <DefaultLayout titleCode={titleCode} descriptionCode={descriptionCode} locale={locale}>
        <div id="projects-list">
          {projectsData.map((repository, index) => (
            <RepositoryWidget
              key={repository.name}
              description={projectsInfo[index].description}
              repoIcons={projectsInfo[index].repoIcons}
              repositoryData={repository}
              locale={locale}
            />
          ))}
        </div>
      </DefaultLayout>
    </div>
  );
}
