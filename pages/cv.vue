<template>
  <div class="layout-container">
    <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
      <div id="cv-page">
        <div id="job-list">
          <div id="jobs-header">
            <h2>{{ $t('WORK.EXPERIENCE') }}</h2>
            <a
              id="cv-download-button"
              :href="locale === DEFAULT_LOCALE ? '/CV.pdf' : '/Resume.pdf'"
              color="primary"
              :download="`${$t('RESUME')} Arnaud Flaesch.pdf`"
              ><v-btn variant="flat" color="primary">
                {{ $t('DOWNLOAD.RESUME') }}
              </v-btn></a
            >
          </div>
          <Experience v-for="(job, index) in jobData" :key="job.name" :experience="job" :style="isVisible(index)" />

          <v-btn
            v-if="jobIndexEnd === DEFAULT_NUMBER_OF_JOBS_TO_SHOW"
            class="cv-button"
            color="primary"
            @click="() => (jobIndexEnd = undefined)"
          >
            {{ $t('SEE.MORE.EXPERIENCES') }}
          </v-btn>
          <v-btn v-else color="primary" class="cv-button" @click="() => (jobIndexEnd = DEFAULT_NUMBER_OF_JOBS_TO_SHOW)">
            {{ $t('SEE.LESS.EXPERIENCES') }}
          </v-btn>
        </div>

        <Certifications />

        <div id="formation-list">
          <h2>{{ $t('EDUCATION') }}</h2>
          <Experience v-for="formation in formationData" :key="formation.title_fr" :experience="formation" />
        </div>

        <h2 id="skills-title">{{ $t('LANGUAGES.TOOLS') }}</h2>
        <Skills />

        <h2 id="hobbies-title">{{ $t('HOBBIES') }}</h2>

        <div id="hobbies-list">
          <DetailBlock v-for="(hobby, index) in hobbiesList" :key="index">
            <template #titleComponent
              ><h3>{{ hobby[locale as keyof ITranslatableElement].title }}</h3>
            </template>
            <template #detailComponent> {{ hobby[locale as keyof ITranslatableElement].description }} </template>
          </DetailBlock>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import formationData from '~/data/EducationData';
import jobData from '~/data/WorkData';
import { hobbiesList } from '~/data/HobbiesData';
import type { ITranslatableElement } from '~/model/ITranslatableElement';
import { ref, type Ref } from 'vue';
import { DEFAULT_LOCALE } from '../data/SiteData';
import { useI18n } from 'vue-i18n';

const DEFAULT_NUMBER_OF_JOBS_TO_SHOW = 3;

const { locale } = useI18n();
const jobIndexEnd: Ref<number | undefined> = ref(DEFAULT_NUMBER_OF_JOBS_TO_SHOW);

const titleCode = 'CV.PAGE.TITLE';
const descriptionCode = 'CV.PAGE.DESCRIPTION';

function isVisible(index: number) {
  if (!jobIndexEnd.value || (jobIndexEnd.value && index < jobIndexEnd.value)) {
    return { display: 'inherit' };
  } else {
    return { display: 'none' };
  }
}
</script>

<style lang="scss" scoped>
#cv-page {
  display: flex;
  flex-direction: column;
  row-gap: 2em;

  #jobs-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

  .cv-button {
    margin: 0 auto;
  }

  #job-list,
  #formation-list,
  #hobbies-list {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
  }
}
</style>
