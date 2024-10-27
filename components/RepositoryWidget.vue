<template>
  <div class="repository-widget-container">
    <div class="repository-widget-title">
      <h3>
        <a :href="repoWidgetProps.repositoryData.url">{{ repoWidgetProps.repositoryData.name }}</a>
      </h3>
      <a :href="repoWidgetProps.repositoryData.url">
        <TooltipIcon tooltip="Lien GitHub">
          <template v-slot:icon
            ><NuxtImg src="/icons/tools/github.png" :width="ICON_WIDTH" :height="ICON_HEIGHT" alt="Lien GitHub"
          /></template>
        </TooltipIcon>
      </a>
    </div>

    <div>{{ $t(repoWidgetProps.description) }}</div>

    <div class="technical-stack-container">
      <div class="technical-stack">
        <div>{{ $t('TECHNICAL.STACK') }} :</div>

        <div class="languages-container">
          <div
            :key="index"
            v-for="(edge, index) in [...repoWidgetProps.repositoryData.languages.edges].sort(sortEdgesBySize)"
            class="language-edge"
            :style="{
              backgroundColor: edge.node.color,
              width: `${Math.fround((edge.size / repoWidgetProps.repositoryData.languages.totalSize) * 100)}%`
            }"
          >
            <v-tooltip activator="parent" :text="edge.node.name" location="top"> </v-tooltip>
          </div>
        </div>

        <div class="repository-icons">
          <TooltipIcon
            v-bind:key="index"
            v-for="(languageIcon, index) in repoWidgetProps.repoIcons"
            :tooltip="languageIcon.name"
          >
            <template v-slot:icon
              ><NuxtImg
                :src="`${ICONS_PATH}${languageIcon.label.toLowerCase()}/${languageIcon.path ? languageIcon.path : languageIcon.name.replace(/\s/g, '').toLowerCase()}.${languageIcon.extension ? languageIcon.extension : 'svg'}`"
                :width="MAX_WIDTH"
                :height="MAX_HEIGHT"
                :alt="languageIcon.name"
            /></template>
          </TooltipIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IGitHubRepoLanguage } from '~/model/IGitHubRepoLanguage';
import type { IEdge, IRepository } from '~/model/IRepository';
const ICON_HEIGHT = 40;
const ICON_WIDTH = 40;
const MAX_HEIGHT = 40;
const MAX_WIDTH = 40;

const ICONS_PATH = '/icons/';
const repoWidgetProps = defineProps({
  description: {
    type: String,
    required: true
  },
  repoIcons: {
    type: Array<IGitHubRepoLanguage>,
    required: true
  },
  repositoryData: {
    type: Object as () => IRepository,
    required: true
  }
});

function sortEdgesBySize(edgeA: IEdge, edgeB: IEdge) {
  if (edgeA.size > edgeB.size) {
    return -1;
  }
  if (edgeA.size < edgeB.size) {
    return 1;
  }
  return 0;
}
</script>

<style lang="scss" scoped>
.repository-widget-container {
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;

  .repository-widget-title {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  .technical-stack-container {
    display: flex;
    flex-direction: column;
    row-gap: 2em;
    margin: 0.5em 0;

    .technical-stack {
      display: flex;
      flex-direction: column;
      row-gap: 2em;

      .languages-container {
        display: flex;
        flex-direction: row;
        flex: 1;

        .language-edge {
          height: 1.5em;
        }

        :first-child {
          border-top-left-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
        }

        :last-child {
          border-top-right-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }
      }

      .repository-icons {
        display: flex;
        flex-flow: row wrap;
        gap: 0.2em 0.8em;
      }
    }
  }
}
</style>
