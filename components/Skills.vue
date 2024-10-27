<template>
  <div id="skills-list">
    <DetailBlock :key="index" v-for="(block, index) in skills">
      <template v-slot:titleComponent
        ><h3 class="skill-category-title">{{ $t(block.label) }}</h3></template
      >

      <template v-slot:detailComponent>
        <TooltipIcon v-bind:key="skill.name" v-for="skill in block.skills" :tooltip="skill.name">
          <template v-slot:icon
            ><NuxtImg
              :src="`${ICONS_PATH}${block.label.toLowerCase()}/${skill.name.replace(/\s/g, '').toLowerCase()}.${skill.extension ? skill.extension : 'svg'}`"
              :width="MAX_WIDTH"
              :height="MAX_HEIGHT"
              :alt="skill.name"
          /></template>
        </TooltipIcon>
      </template>
    </DetailBlock>
  </div>
</template>

<script lang="ts" setup>
import { skills } from '~/data/SkillsData';
const MAX_HEIGHT = 40;
const MAX_WIDTH = 40;

const ICONS_PATH = '/icons/';
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
