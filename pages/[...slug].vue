<template>
  <div class="layout-container">
    <NuxtLayout :blogView="true">
      <ContentDoc>
        <template #default="{ doc }">
          <TemplateBlogPost :doc="doc" :previous="previous" :next="next" />
        </template>
        <template #not-found>
          <ContentDoc :path="route.path.replace('/en', '')">
            <template #default="{ doc }"><TemplateBlogPost :doc="doc" :previous="previous" :next="next" /></template>
            <template #not-found> {{ notFoundError() }} </template>
          </ContentDoc>
        </template>
      </ContentDoc>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { author, fullName, jobName, siteUrl } from '~/data/SiteData';
const { t, locale } = useI18n();

const route = useRoute();
const currentPath = route.path.startsWith('/en') ? route.path.replace('/en', '') : route.path;
const [previous, next] = await queryContent().only(['_path', 'title']).sort({ date: -1 }).findSurround(currentPath);
const { data } = await useAsyncData('home', () => queryContent(currentPath).findOne());

const description = data.value?.description;
const date = data.value?.date;
const image = data.value?.image;

const defaultTitle = `${fullName} - ${t(jobName)}`;
const title = data.value?.title ? [data.value?.title, defaultTitle].join(' | ') : defaultTitle;
const imageUrl = `${siteUrl}/blog/${image}`;

function notFoundError() {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  });
}

useSeoMeta({
  title: title,
  ogTitle: title,
  ogUrl: `${siteUrl}${route.fullPath}`,
  ogType: 'article',
  ogLocale: locale,
  ogImage: imageUrl,
  ogImageUrl: imageUrl,
  //   twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player'
  //twitterTitle: string
  //   twitterDescription: string
  // twitterImage: string | Array ab
  description: description,
  ogDescription: description,
  articlePublishedTime: date,
  articleModifiedTime: date,
  articleAuthor: [author]
});
</script>
