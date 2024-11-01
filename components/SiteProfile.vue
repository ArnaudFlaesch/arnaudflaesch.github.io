<template>
  <div id="profile">
    <NuxtLink id="avatar-link" to="/">
      <NuxtImg id="bio-avatar" :width="400" :height="400" src="/profile-picture.jpg" :alt="author" />
    </NuxtLink>
    <div id="bio">
      <div id="work">
        <v-icon>{{ mdiBriefcase }}</v-icon>
        {{ $t(jobName) }} <br />
        {{ $t('AT') }}{{ company }}
      </div>
      <div id="location">
        <v-icon>{{ mdiMapMarker }}</v-icon>
        {{ city }}
      </div>
    </div>
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
</template>

<script lang="ts" setup>
import { mdiBriefcase, mdiMapMarker } from '@mdi/js';
import { fullName, jobName, company, city } from '~/data/SiteData';
import { profileSocialLinks } from '~/data/ProfileSocialsData';
const IMAGE_HEIGHT = 35;
const IMAGE_WIDTH = 35;

const author = fullName;
</script>

<style lang="scss">
#profile {
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  #avatar-link {
    justify-content: center;
    display: flex;
  }

  #bio-avatar {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 0 auto;
  }

  #bio {
    .v-icon {
      margin-right: 1rem;
    }

    > * {
      display: flex;
      flex-direction: row;
    }

    @media (width > 700px) {
      display: flex;
      flex-direction: column;
      row-gap: 0.5em;
      margin-left: 0.3em;
    }
  }

  #social-links {
    display: flex;
    flex-direction: column;
    gap: 1em 0.5em;
    font-size: 0.9rem;

    a {
      color: unset;
    }

    .social-link {
      display: flex;
      flex-direction: row;
      align-items: center;

      div {
        height: 35px;
        width: 35px;
      }

      img {
        border-radius: 50%;
      }

      span {
        margin-left: 1rem;
      }
    }
  }
}
</style>
