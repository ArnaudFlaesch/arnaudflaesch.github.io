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
      <div id="linkedinLink">
        <a :href="linkedinLink" class="social-link">
          <TooltipIcon tooltip="LinkedIn">
            <template v-slot:icon
              ><NuxtImg
                src="/icons/socials/linkedin-icon.png"
                :width="IMAGE_HEIGHT"
                :height="IMAGE_WIDTH"
                alt="linkedin"
            /></template>
          </TooltipIcon>
          <span>{{ $t('LINKEDIN.PROFILE') }}</span>
        </a>
      </div>

      <div id="githubLink">
        <a :href="githubLink" class="social-link">
          <TooltipIcon tooltip="GitHub">
            <template v-slot:icon
              ><NuxtImg src="/icons/socials/github-icon.png" :width="IMAGE_HEIGHT" :height="IMAGE_WIDTH" alt="github"
            /></template>
          </TooltipIcon>
          <span>{{ $t('GITHUB.PROFILE') }}</span>
        </a>
      </div>

      <div id="scrumOrgLink">
        <a :href="scrumOrgLink" class="social-link">
          <TooltipIcon tooltip="Scrum.org">
            <template v-slot:icon
              ><NuxtImg
                src="/icons/socials/scrum-org-icon.png"
                :width="IMAGE_HEIGHT"
                :height="IMAGE_WIDTH"
                alt="scrum.org"
            /></template>
          </TooltipIcon>
          <span>{{ $t('SCRUM.ORG.PROFILE') }}</span>
        </a>
      </div>

      <div id="credlyLink">
        <a :href="credlyLink" class="social-link">
          <TooltipIcon tooltip="Certifications">
            <template v-slot:icon
              ><NuxtImg src="/icons/socials/credly-icon.png" :width="IMAGE_HEIGHT" :height="IMAGE_WIDTH" alt="credly"
            /></template>
          </TooltipIcon>
          <span>{{ $t('CERTIFICATIONS') }}</span>
        </a>
      </div>

      <div id="mediumLink">
        <a :href="mediumLink" class="social-link">
          <TooltipIcon tooltip="Medium">
            <template v-slot:icon
              ><NuxtImg src="/icons/socials/medium-icon.png" :width="IMAGE_HEIGHT" :height="IMAGE_WIDTH" alt="medium"
            /></template>
          </TooltipIcon>
          <span>{{ $t('MEDIUM.PROFILE') }}</span>
        </a>
      </div>

      <div id="stackoverflowLink">
        <a :href="stackOverflowLink" class="social-link">
          <TooltipIcon tooltip="Stack Overflow">
            <template v-slot:icon
              ><NuxtImg src="/icons/socials/stackoverflow-icon.png" :width="IMAGE_WIDTH" alt="stackoverflow"
            /></template>
          </TooltipIcon>
          <span>{{ $t('STACK.OVERFLOW.PROFILE') }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { mdiBriefcase, mdiMapMarker } from '@mdi/js';
import {
  fullName,
  credlyLink,
  scrumOrgLink,
  mediumLink,
  linkedinLink,
  stackOverflowLink,
  jobName,
  githubLink,
  company,
  city
} from '~/data/SiteData';

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
    gap: 2em 0.5em;
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
