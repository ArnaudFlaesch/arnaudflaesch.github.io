<template>
  <div id="certifications-list">
    <h2>Certifications</h2>

    <DetailBlock v-for="(certificationGroup, index) in certificationsData" :key="index">
      <template #titleComponent>
        <span v-for="title in certificationGroup.title" :key="title.label">
          <h4>
            {{ title.isNameTranslatableCode ? $t(title.label) : title.label }} -
            {{ format(title.date, 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
          </h4></span
        >
      </template>
      <template #detailComponent>
        <div class="certifications-logos">
          <div v-for="certification in certificationGroup.certifications" :key="certification.name">
            <NuxtLink :to="certification.badgeLink">
              <NuxtImg
                :width="certificationGroup.imageWidth ?? '120'"
                :src="certification.imagePath"
                :alt="certification.isNameTranslatableCode ? $t(certification.name) : certification.name"
              />
              <v-no-ssr>
                <v-tooltip activator="parent" location="top">
                  {{ certification.isNameTranslatableCode ? $t(certification.name) : certification.name }}
                </v-tooltip>
              </v-no-ssr>
            </NuxtLink>
          </div>
        </div>
      </template>
    </DetailBlock>
  </div>
</template>

<script lang="ts" setup>
import { certificationsData } from '~/data/CertificationData';
import { format } from 'date-fns';
import { getLocaleFromLanguage } from '~/utils/DateUtils';
const { locale } = useI18n();
</script>

<style lang="scss" scoped>
#certifications-list {
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
}

.certifications-logos {
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  column-gap: 1em;
  justify-content: space-evenly;

  > * {
    flex: 1 0 32%;
    place-content: center;
    align-items: center;
    display: flex;
  }
}

img {
  &.large-image {
    max-width: 35%;
    cursor: pointer;
  }
}
</style>
