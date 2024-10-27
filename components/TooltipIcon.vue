<template>
  <v-icon>
    <NuxtImg :src="iconPath" :width="iconWidth ?? ICON_WIDTH" :height="iconHeight ?? ICON_HEIGHT" :alt="alt" />
    <v-no-ssr>
      <v-tooltip :id="id" activator="parent" location="top">
        {{ tooltip }}
      </v-tooltip>
    </v-no-ssr>
  </v-icon>
</template>

<script lang="ts" setup>
import { useId } from 'vue';

const id = useId();
const { tooltip } = defineProps<{
  tooltip: string;
  iconPath: string;
  alt: string;
  iconHeight?: number;
  iconWidth?: number;
}>();
const ICON_HEIGHT = 40;
const ICON_WIDTH = 40;
</script>

<style lang="scss" scoped>
.v-icon {
  width: 40px;
}
</style>
