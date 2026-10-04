import React from "react";
import ProjectsPage from "~/components/ProjectsPage";
import { projectsInfo } from "~/data/ProjectsData";
import { fetchProjectData } from "~/utils/github";
import { buildMetadata } from "~/utils/seo";

export const metadata = buildMetadata({
  titleCode: "PROJECTS.PAGE.TITLE",
  descriptionCode: "PROJECTS.PAGE.DESCRIPTION",
  path: "/projets",
  locale: "fr"
});

export default async function Page() {
  const projectsData = await Promise.all(projectsInfo.map((projectInfo) => fetchProjectData(projectInfo.name)));
  return <ProjectsPage projectsData={projectsData} locale="fr" />;
}
