<template>
  <div class="layout-container">
    <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
      <div id="projects-list">
        <RepositoryWidget
          v-for="(repository, index) in projectsData"
          :key="repository.name"
          :description="projectsInfo[index].description"
          :repo-icons="projectsInfo[index].repoIcons"
          :repository-data="repository"
        />
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { projectsInfo } from '~/data/ProjectsData';
import type { IRepository } from '~/model/IRepository';
const titleCode = 'PROJECTS.PAGE.TITLE';
const descriptionCode = 'PROJECTS.PAGE.DESCRIPTION';
const projectsData = await Promise.all(projectsInfo.map((projectInfo) => getProjectData(projectInfo.name)));

async function getProjectData(projectName: string): Promise<IRepository> {
  const { data } = await useAsyncGql({
    operation: 'GetGitHubRepositoryDataQuery',
    variables: { repository: projectName, owner: 'ArnaudFlaesch' }
  });
  return data.value.repository as IRepository;
}
</script>

<style lang="scss" scoped>
#projects-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 3em;

  > * {
    flex-basis: calc(50% - 1.5em);
    padding: 10px;
    box-shadow: 0 0 5px black;
    border-radius: 1%;

    @media (width <= 850px) {
      flex-basis: 100%;
    }
  }
}
</style>
