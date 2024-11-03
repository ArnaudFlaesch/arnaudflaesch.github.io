<template>
  <v-icon :style="{ height: `${iconHeight ?? ICON_DEFAULT_SIZE}px`, width: `${iconWidth ?? ICON_DEFAULT_SIZE}px` }">
    <NuxtImg
      :src="iconPath"
      :width="iconWidth ?? ICON_DEFAULT_SIZE"
      :height="iconHeight ?? ICON_DEFAULT_SIZE"
      :alt="alt"
    />
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
const ICON_DEFAULT_SIZE = 40;
</script>
