<template>
  <div id="skills-list">
    <DetailBlock v-for="(block, index) in skills" :key="index">
      <template #titleComponent
        ><h3 class="skill-category-title">{{ $t(block.label) }}</h3></template
      >
      <template #detailComponent>
        <TooltipIcon
          v-for="skill in block.skills"
          :key="skill.name"
          :tooltip="skill.name"
          :icon-path="
            getSkillIconPath(
              block.label.toLowerCase(),
              skill.path ?? skill.name.replace(/\s/g, '').toLowerCase(),
              skill.extension ? skill.extension : 'svg'
            )
          "
          :alt="skill.name"
        />
      </template>
    </DetailBlock>
  </div>
</template>

<script lang="ts" setup>
import { skills } from "~/data/SkillsData";

const ICONS_PATH = "/icons/";

function getSkillIconPath(label: string, path: string, extension: string): string {
  return `${ICONS_PATH}${label}/${path}.${extension}`;
}
</script>

<style lang="scss">
#skills-list {
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  .skill-category-title {
    margin: auto;
  }

  .detail-info {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }
}
</style>
