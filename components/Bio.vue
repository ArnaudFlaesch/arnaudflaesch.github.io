<template>
  <div id="bio">
    <NuxtImg class="bio-avatar" :width="100" :height="100" src="/profile-picture.jpg" :alt="author" />
    <span>
      Écrit par <strong>{{ author }}</strong>
    </span>

    <div id="social-links-bio">
      <NuxtLink :to="linkedinLink">
        <NuxtImg  width="40" src="/icons/socials/linkedin-icon.png" alt="linkedin" />
        <v-no-ssr>
          <v-tooltip :id="id" activator="parent" location="top">LinkedIn</v-tooltip>
        </v-no-ssr>
      </NuxtLink>

      <NuxtLink :to="githubLink">
        <NuxtImg  width="40" src="/icons/socials/github-icon.png" alt="github" />
        <v-no-ssr>
          <v-tooltip :id="id" activator="parent" location="top">Github</v-tooltip>
        </v-no-ssr>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fullName, linkedinLink, githubLink } from '~/data/SiteData';
const author = fullName;
</script>

<style lang="scss" scoped>
#bio {
  display: flex;
  flex-direction: column;
  row-gap: 0.8em;

  #social-links-bio {
    display: flex;
    flex-direction: row;
    column-gap: 0.5em;

    img {
      height: 30px;
    }
  }
}
</style>
