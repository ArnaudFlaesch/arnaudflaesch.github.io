import React from "react";
import DefaultLayout from "~/components/DefaultLayout/DefaultLayout";
import RepositoryWidget from "~/components/RepositoryWidget/RepositoryWidget";
import { projectsInfo } from "~/data/ProjectsData";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { IRepository } from "~/model/IRepository";
import "./ProjectsPage.scss";

interface ProjectsPageProps {
  projectsData: IRepository[];
  locale?: string;
}

export default function ProjectsPage({ projectsData, locale = DEFAULT_LOCALE }: ProjectsPageProps) {
  const titleCode = "PROJECTS.PAGE.TITLE";
  const descriptionCode = "PROJECTS.PAGE.DESCRIPTION";

  return (
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
  );
}
