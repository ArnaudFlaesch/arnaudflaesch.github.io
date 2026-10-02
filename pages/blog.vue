<template>
  <div class="layout-container">
    <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
      <div id="rss-link-container">
        <span>{{ $t("RSS.FEED.MESSAGE") }} :</span>
        <a :href="rssFeedFile">
          <v-icon id="rss-feed-icon">{{ mdiRss }}</v-icon></a
        >
      </div>
      <ol id="articles-list">
        <li v-for="article in articles ?? []" :key="article.path">
          <Post :post="article" />
        </li>
      </ol>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import Post from "~/components/Post.vue";
import { mdiRss } from "@mdi/js";
import { rssFeedFile } from "~/data/SiteData";

const titleCode = "BLOG.PAGE.TITLE";
const descriptionCode = "BLOG.PAGE.DESCRIPTION";

const { data: articles } = await useAsyncData("blog-articles", () =>
  queryCollection("blog").order("date", "DESC").limit(5).all()
);
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
