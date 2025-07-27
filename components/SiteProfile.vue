<template>
  <div id="profile-bio">

    <div id="profile">

      <div id="social-links">
        <NuxtLink
          v-for="socialLink in profileSocialLinks"
          :key="socialLink.name"
          :to="socialLink.link"
          class="social-link"
        >
          <TooltipIcon
            :tooltip="socialLink.name"
            :icon-width="IMAGE_WIDTH"
            :icon-height="IMAGE_HEIGHT"
            :icon-path="socialLink.imgPath"
            :alt="socialLink.name.toLowerCase()"
          />
          <span>{{ $t(socialLink.labelI18nCode) }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { mdiBriefcase, mdiMapMarker } from "@mdi/js";
import { fullName, jobName, company, city } from "~/data/SiteData";
import { profileSocialLinks } from "~/data/ProfileSocialsData";
const IMAGE_HEIGHT = 35;
const IMAGE_WIDTH = 35;

const author = fullName;
</script>

<style lang="scss">

</style>
