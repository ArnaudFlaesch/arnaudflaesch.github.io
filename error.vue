<template>
  <div class="layout-container">
    <NuxtLayout>
      <h1>404 : Not found</h1>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError
});
</script>
