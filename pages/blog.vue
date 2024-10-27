<template>
  <div>
    <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
      <ContentList :query="query" v-slot="{ list }">
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
const titleCode = 'BLOG.PAGE.TITLE';
const descriptionCode = 'BLOG.PAGE.DESCRIPTION';

const query: QueryBuilderParams = { path: '/blog', limit: 5, sort: [{ date: -1 }] };
</script>

<style lang="scss" scoped>
#articles-list {
  list-style-type: none;
}
</style>
