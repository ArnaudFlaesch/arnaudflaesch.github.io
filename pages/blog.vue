<template>
  <div class="layout-container">
    <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
      <div id="rss-link-container">
        <span>{{ $t('RSS.FEED.MESSAGE') }} :</span>
        <a :href="rssFeedFile">
          <v-icon id="rss-feed-icon">{{ mdiRss }}</v-icon></a
        >
      </div>
      <ContentList v-slot="{ list }" :query="query">
        <ol id="articles-list">
          <li v-for="article in list" :key="article._path">
            <Post :post="article" />
          </li>
        </ol>
      </ContentList>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
import Post from '~/components/Post.vue';
import { mdiRss } from '@mdi/js';
import { rssFeedFile } from '~/data/SiteData';

const titleCode = 'BLOG.PAGE.TITLE';
const descriptionCode = 'BLOG.PAGE.DESCRIPTION';

const query: QueryBuilderParams = { path: '/blog', limit: 5, sort: [{ date: -1 }] };
</script>

<style lang="scss" scoped>
#rss-link-container {
  display: flex;
  flex-direction: row;
  column-gap: 1em;
  align-items: center;

  #rss-feed-icon {
    color: white;
    background-color: orange;
    height: 25px;
    width: 25px;
    border-radius: 5px;
  }
}

#articles-list {
  list-style-type: none;
}
</style>
