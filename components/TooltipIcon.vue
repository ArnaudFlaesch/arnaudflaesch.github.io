<template>
  <v-icon
    ><slot name="icon"></slot>
    <v-no-ssr>
      <v-tooltip :id="id" activator="parent" location="top">
        {{ tooltip }}
      </v-tooltip></v-no-ssr
    ></v-icon
  >
</template>

<script lang="ts" setup>
import { useId } from 'vue';

const id = useId();
const { tooltip } = defineProps<{
  tooltip: string;
}>();
</script>

<style lang="scss" scoped>
.v-icon {
  width: 40px;
}
</style>
