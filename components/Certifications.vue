<template>
  <div id="certifications-list">
    <h2>Certifications</h2>

    <DetailBlock v-for="(certificationGroup, index) in certificationsData" :key="index">
      <template #titleComponent>
        <h4 v-for="title in certificationGroup.title" :key="title.label">
          {{ title.isNameTranslatableCode ? $t(title.label) : title.label }} -
          {{ format(title.date, 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
        </h4>
      </template>
      <template #detailComponent>
        <div class="certifications-logos">
          <div v-for="certification in certificationGroup.certifications" :key="certification.name">
            <NuxtLink :to="certification.badgeLink">
              <TooltipIcon
                :tooltip="certification.isNameTranslatableCode ? $t(certification.name) : certification.name"
                :icon-width="certificationGroup.imageSize ?? DEFAULT_CERTIFICATION_BADGE_SIZE"
                :icon-height="
                  certificationGroup.imageHeight ?? certificationGroup.imageSize ?? DEFAULT_CERTIFICATION_BADGE_SIZE
                "
                :icon-path="certification.imagePath"
                :alt="certification.isNameTranslatableCode ? $t(certification.name) : certification.name"
              />
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

const DEFAULT_CERTIFICATION_BADGE_SIZE = 115;
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
</style>
