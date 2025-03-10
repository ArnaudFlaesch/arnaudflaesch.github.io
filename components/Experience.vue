<template>
  <DetailBlock>
    <template #titleComponent>
      <div class="job-content">
        <div class="job-period">
          {{ formatDate(props.experience.dateDebut) }} <v-icon> {{ mdiArrowRightThin }} </v-icon>
          <span v-if="props.experience.dateFin"> {{ formatDate(props.experience.dateFin) }}</span>
          <span v-else>{{ $t("TODAY") }}</span>
        </div>
        <div class="job-name">
          <a v-if="props.experience.website" :href="props.experience.website">
            <NuxtImg v-if="props.experience.logoPath" :src="props.experience.logoPath" :alt="props.experience.name" />
            <h3 v-else>{{ props.experience.name }}</h3>
          </a>
          <span v-else>
            <NuxtImg v-if="props.experience.logoPath" :src="props.experience.logoPath" :alt="props.experience.name" />
            <h3 v-else>{{ props.experience.name }}</h3>
          </span>
        </div>
        <div class="job-location">{{ props.experience.location }}</div>
      </div>
    </template>
    <template #detailComponent>
      <div class="job-details-content">
        <h3>{{ title }}</h3>
        <div class="job-description">
          <div v-for="(description, index) in descriptionList" :key="index">
            {{ description }}
            <br />
          </div>
        </div>
      </div>
    </template>
  </DetailBlock>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { format } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import { fr } from "date-fns/locale/fr";
import type { IExperience } from "~/model/IExperience";
import { mdiArrowRightThin } from "@mdi/js";

const { locale } = useI18n();

const props = defineProps({
  experience: {
    type: Object as () => IExperience,
    required: true
  }
});

const title = props.experience[`title_${locale.value}` as keyof IExperience] as string;
const descriptionList = props.experience[`description_${locale.value}` as keyof IExperience] as string[];

function formatDate(date: Date): string {
  return format(date, "LLLL yyyy", { locale: locale.value === "fr" ? fr : enUS });
}
</script>

<style lang="scss">
.detail-info {
  margin: 0 !important;
}

.job-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  place-items: center;
  row-gap: 1.5em;
  height: 100%;
  width: 100%;

  .job-period {
    display: flex;
    align-items: center;
  }

  .job-name {
    a {
      display: flex;
      text-decoration: none;
    }

    img {
      max-height: 80px;
      max-width: 160px;
    }
  }

  .job-period,
  .job-location {
    font-size: small;
    font-weight: bold;
  }
}

.job-details-content {
  h3 {
    text-align: center;
  }
}

@media (width < 850px) {
  .job-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 0.4em;

    .job-period {
      flex-direction: column;
    }
  }
}
</style>
