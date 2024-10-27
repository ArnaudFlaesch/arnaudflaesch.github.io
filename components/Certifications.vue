<template>
  <div id="certifications-list">
    <h2>Certifications</h2>

    <DetailBlock v-bind:key="index" v-for="(certificationGroup, index) in certificationsData">
      <template v-slot:titleComponent>
        <h4>{{ certificationGroup.title }}</h4>
      </template>
      <template v-slot:detailComponent>
        <div class="certifications-logos">
          <a
            v-bind:key="certification.name"
            v-for="certification in certificationGroup.certifications"
            :href="certification.badgeLink"
          >
            <NuxtImg width="105" :src="certification.imagePath" :alt="certification.name" />
            <v-no-ssr>
              <v-tooltip activator="parent" location="top">
                {{ certification.name }}
              </v-tooltip></v-no-ssr
            >
          </a>
        </div>
      </template>
    </DetailBlock>

    <!--

    <DetailBlock>
      <template v-slot:titleComponent>
        <h4>
          Google Cloud Professional Cloud Developer {{ $t('AND') }} Digital Leader -
          {{ format(new Date(2024, 5, 4), 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
        </h4>
      </template>
      <template v-slot:detailComponent>
        <div class="certifications-logos">
          <a :href="googleCloudProfessionalDeveloperBadgeLink">
            <NuxtImg
              width="105"
              src="/certifications/professional-cloud-developer-certification.png"
              alt="Google Cloud Professional Cloud Developer"
            />
            <v-no-ssr>
              <v-tooltip id="google-pcd-certification" activator="parent" location="top">
                Google Cloud Professional Cloud Developer
              </v-tooltip></v-no-ssr
            >
          </a>

          <a :href="googleCloudDigitalLeaderBadgeLink">
            <NuxtImg
              width="105"
              src="/certifications/cloud-digital-leader-certification.png"
              alt="Google Cloud Digital Leader"
            />
            <v-no-ssr>
              <v-tooltip id="google-cdl-certification" activator="parent" location="top">
                Google Cloud Digital Leader
              </v-tooltip></v-no-ssr
            >
          </a>
        </div>
      </template>
    </DetailBlock>

    <DetailBlock>
      <template v-slot:titleComponent>
        <h4>
          GitHub Actions {{ $t('AND') }} Advanced Security -
          {{ format(new Date(2024, 2, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
        </h4>
        <br />
        <h4>
          GitHub Foundations -
          {{ format(new Date(2024, 6, 5), 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
        </h4>
      </template>
      <template v-slot:detailComponent>
        <div class="certifications-logos">


          <a :href="githubActionsBadgeLink">
            <NuxtImg
              width="105"
              src="/certifications/github-actions.png"
              alt="GitHub Actions"
            />
            <v-no-ssr>
              <v-tooltip id="github-actions-certification" activator="parent" location="top">
                GitHub Actions
              </v-tooltip></v-no-ssr
            >
          </a>

          <a :href="githubAdvancedSecurityBadgeLink">
            <NuxtImg
              width="105"
              src="/certifications/github-advanced-security.png"
              alt="GitHub Advanced Security"
            />
            <v-no-ssr>
              <v-tooltip id="github-as-certification" activator="parent" location="top">
                GitHub Advanced Security
              </v-tooltip></v-no-ssr
            >
          </a>

          <a :href="githubFoundationsBadgeLink">
            <NuxtImg
              width="105"
              src="/certifications/github-foundations.png"
              alt="GitHub Foundations"
            />
            <v-no-ssr>
              <v-tooltip id="github-foundations-certification" activator="parent" location="top">
                GitHub Foundations
              </v-tooltip></v-no-ssr
            >
          </a>

          <a :href="githubCopilotBadgeLink">
            <NuxtImg
              width="105"
              src="/certifications/github-copilot.png"
              alt="GitHub Copilot"
            />
            <v-no-ssr>
              <v-tooltip id="github-copilot-certification" activator="parent" location="top">
                GitHub Copilot
              </v-tooltip></v-no-ssr
            >
          </a>
        </div>
      </template>
    </DetailBlock>

    <DetailBlock>
      <template v-slot:titleComponent>
        <h4>
          Professional Scrum Master 1 {{ $t('AND') }} 2 -
          {{ format(new Date(2023, 11, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
        </h4>
      </template>
      <template v-slot:detailComponent>
        <div class="certifications-logos">

          <a :href="scrumOrgLink">
            <NuxtImg
              width="105"
              src="/certifications/professional-scrum-master-i-psm-i.png"
              alt="Professional Scrum Master 1"
            />
            <v-no-ssr>
              <v-tooltip id="psm1-certification" activator="parent" location="top">
                Professional Scrum Master 1
              </v-tooltip></v-no-ssr
            >
          </a>

          <a :href="scrumOrgLink">
            <NuxtImg
              width="105"
              src="/certifications/professional-scrum-master-ii-psm-ii.png"
              alt="Professional Scrum Master 2"
            />
            <v-no-ssr>
              <v-tooltip id="psm2-certification" activator="parent" location="top">
                Professional Scrum Master 2
              </v-tooltip></v-no-ssr
            >
          </a>
        </div>
      </template>
    </DetailBlock>

    <DetailBlock>
      <template v-slot:titleComponent>
        <h4>
          SAFe 6 Agilist - {{ format(new Date(2024, 4, 16), 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
        </h4>
      </template>
      <template v-slot:detailComponent>
        <div class="certifications-logos">
          <a :href="leadingSafeBadgeLink">
            <NuxtImg
              width="105"
              src="/certifications/certified-safe-6-agilist.png"
              alt="SAFe 6 Agilist"
            />
            <v-no-ssr>
              <v-tooltip id="safe-agilist-certification" activator="parent" location="top">
                SAFe 6 Agilist
              </v-tooltip></v-no-ssr
            >
          </a>
        </div>
      </template>
    </DetailBlock>
-->

    <DetailBlock>
      <template v-slot:titleComponent>
        <h4>
          {{ $t('SUSTAINABLE.IT.KNOWLEDGE.CERTIFICATE') }} -
          {{ format(new Date(2024, 3, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
        </h4>
      </template>
      <template v-slot:detailComponent>
        <div class="certifications-logos">
          <a href="https://numerique-responsable.univ-lr.fr/ecocertifications/">
            <NuxtImg
              width="450"
              src="/certifications/numerique-responsable.png"
              :alt="$t('SUSTAINABLE.IT.KNOWLEDGE.CERTIFICATE')"
            />
            <v-no-ssr>
              <v-tooltip activator="parent" location="top">
                {{ $t('SUSTAINABLE.IT.KNOWLEDGE.CERTIFICATE') }}
              </v-tooltip>
            </v-no-ssr>
          </a>
        </div>
      </template>
    </DetailBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { certificationsData } from '~/data/CertificationData';
import { format } from 'date-fns';

const { locale } = useI18n();

const visibleRef = ref(false);
</script>

<style lang="scss" scoped>
#certifications-list {
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
}

.certifications-logos {
  display: flex;
  flex-flow: row wrap;
  column-gap: 1em;
  justify-content: space-evenly;
}

img {
  &.large-image {
    max-width: 35%;
    cursor: pointer;
  }
}
</style>
