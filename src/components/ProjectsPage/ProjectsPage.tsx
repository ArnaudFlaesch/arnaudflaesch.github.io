import React from "react";
import RepositoryWidget from "~/components/RepositoryWidget/RepositoryWidget";
import Seo from "~/components/Seo";
import { projectsInfo } from "~/data/ProjectsData";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { IRepository } from "~/model/IRepository";
import { t } from "~/utils/i18n";
import "./ProjectsPage.scss";

interface ProjectsPageProps {
  projectsData: IRepository[];
  locale?: string;
}

export default function ProjectsPage({ projectsData, locale = DEFAULT_LOCALE }: ProjectsPageProps) {
  return (
    <>
      <Seo
        titleCode="PROJECTS.PAGE.TITLE"
        descriptionCode="PROJECTS.PAGE.DESCRIPTION"
        path={locale === "en" ? "/en/projets" : "/projets"}
        locale={locale}
      />
      <h1 id="page-header">{t("PROJECTS.PAGE.TITLE", locale)}</h1>
      <div id="page-description">{t("PROJECTS.PAGE.DESCRIPTION", locale)}</div>
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
    </>
  );
}
