<template>
  <div id="certifications-list">
    <h2>Certifications</h2>

    <DetailBlock v-for="(certificationGroup, index) in certificationsData" :key="index">
      <template #titleComponent>
        <span v-for="title in certificationGroup.title" :key="title.label">
          <h4>
            {{ $t(title.label) }} - {{ format(title.date, 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
          </h4></span
        >
      </template>
      <template #detailComponent>
        <div class="certifications-logos">
          <a
            v-for="certification in certificationGroup.certifications"
            :key="certification.name"
            :href="certification.badgeLink"
          >
            <NuxtImg
              :width="certification.imageWidth ?? '120'"
              :src="certification.imagePath"
              :alt="$t(certification.name)"
            />
            <v-no-ssr>
              <v-tooltip activator="parent" location="top">
                {{ $t(certification.name) }}
              </v-tooltip>
            </v-no-ssr>
          </a>
        </div>
      </template>
    </DetailBlock>

    <!--
{{ $t('AND')
   
-->
  </div>
</template>

<script lang="ts" setup>
import { certificationsData } from '~/data/CertificationData';
import { format } from 'date-fns';
import { useI18n } from 'vue-i18n';
import { getLocaleFromLanguage } from '~/utils/DateUtils';

const { locale, t } = useI18n();
//t();
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
