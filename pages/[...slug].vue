<!-- eslint-disable vue/no-v-html -->
<template>
  <main>
    <NuxtLayout>
      <ContentDoc>
        <template v-slot="{ doc }">
          <TemplateBlogPost :doc="doc" :previous="previous" :next="next" />
        </template>
        <template #not-found>
          <ContentDoc :path="route.path.replace('/en', '')">
            <template v-slot="{ doc }"><TemplateBlogPost :doc="doc" :previous="previous" :next="next" /></template>
          </ContentDoc>
        </template>
      </ContentDoc>
    </NuxtLayout>
  </main>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { author, fullName, jobName, siteName, siteUrl } from '~/data/SiteData';
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

useSeoMeta({
  title: title,
  ogTitle: title,
  ogUrl: `${siteUrl}${route.fullPath}`,
  ogType: 'article',
  ogLocale: locale,
  ogSiteName: siteName,
  //   twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player'
  //twitterTitle: string
  //   twitterDescription: string
  // twitterImage: string | Array ab
  description: description,
  ogDescription: description,
  articlePublishedTime: date,
  articleModifiedTime: date,
  articleAuthor: [author],
  author: author,
  creator: author,
  ogImageUrl: imageUrl,
  ogImage: imageUrl
});

/**
 * {
      property: 'article:published_time',
      content: pubDate
    },
    {
      property: 'article:modified_time',
      content: pubDate
    },
    {
      property: 'og:pubdate',
      content: pubDate
    }
  ];
  return (
    <Seo
      translatedTitle={post.frontmatter.title}
      translatedDescription={post.frontmatter.description || post.excerpt}
      language={pageContext.language}
      image={`${siteUrl}${blogUrlPrefix}${post.frontmatter.image}`}
      location={location.pathname}
      type="article"
      meta={tags}
    />
  );
 */
</script>
