<template>
  <div class="layout-container">
    <NuxtLayout :blogView="true">
      <TemplateBlogPost v-if="doc" :doc="doc" :previous="previous" :next="next" />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { author, fullName, jobName, siteUrl } from "~/data/SiteData";

const { t, locale } = useI18n();
const route = useRoute();

function toContentPath(path: string): string {
  const withoutLocale = path.replace(/^\/en(?=\/|$)/, "") || "/";
  return withoutLocale.replace(/\/+$/, "") || "/";
}

const currentPath = toContentPath(route.path);

const { data: doc } = await useAsyncData(`blog-${currentPath}`, () =>
  queryCollection("blog").path(currentPath).first()
);

if (!doc.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true
  });
}

const { data: surround } = await useAsyncData(`blog-surround-${currentPath}`, () =>
  queryCollectionItemSurroundings("blog", currentPath, {
    fields: ["title", "path"]
  }).order("date", "DESC")
);

const previous = computed(() => surround.value?.[0] ?? null);
const next = computed(() => surround.value?.[1] ?? null);

const description = doc.value.description;
const date = doc.value.date;
const image = doc.value.image;

const defaultTitle = `${fullName} - ${t(jobName)}`;
const title = doc.value.title ? [doc.value.title, defaultTitle].join(" | ") : defaultTitle;
const imageUrl = `${siteUrl}/blog/${image}`;

useSeoMeta({
  title: title,
  ogTitle: title,
  ogUrl: `${siteUrl}${route.fullPath}`,
  ogType: "article",
  ogLocale: locale,
  ogImage: imageUrl,
  ogImageUrl: imageUrl,
  description: description,
  ogDescription: description,
  articlePublishedTime: date,
  articleModifiedTime: date,
  articleAuthor: [author]
});
</script>
