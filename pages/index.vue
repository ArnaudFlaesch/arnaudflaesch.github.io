<template>
  <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
    <div id="home-page">
      <div id="site-links">
        <h2>{{ $t('SITE.CONTENT') }} :</h2>
        <ul>
          <li>
            <NuxtLink :to="localePath('cv')">{{ $t('CV.MESSAGE') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('projects')">{{ $t('PROJECTS.MESSAGE') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('blog')">{{ $t('BLOG.MESSAGE') }}</NuxtLink
            ><!--<a href="{rssFeedFile}">{{ $t('RSS.FEED') }}</a>-->
          </li>
          <li>
            <NuxtLink :to="localePath('contact')">{{ $t('CONTACT.MESSAGE') }}</NuxtLink>
          </li>
        </ul>
      </div>

      <h2 id="blog-title">
        <a href="/blog">{{ $t('RECENT.ARTICLES') }}</a>
      </h2>

      <ContentList :query="query" v-slot="{ list }">
        <ol>
          <li v-for="article in list" :key="article._path">
            <Post :post="article" />
          </li>
        </ol>
      </ContentList>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
import Post from '~/components/Post.vue';

const localePath = useLocalePath();
const titleCode = 'INDEX.PAGE.TITLE';
const descriptionCode = 'INDEX.PAGE.DESCRIPTION';

const query: QueryBuilderParams = { path: '/blog', limit: 5, sort: [{ date: -1 }] };
</script>

<style lang="scss" scoped>
$header-background-color: #2c77a8;
$header-text-color: black;
$body-background-color: #dfdddd;
$detail-block-border-color: #1f5099;

#home-page {
  #site-links {
    ul {
      list-style-type: disc;
    }
    a {
      color: black;
      text-decoration: underline;
    }
  }

  #blog-title {
    margin-top: 2em;
  }

  ol {
    list-style-type: none;
  }
}
</style>
