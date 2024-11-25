<template>
  <div class="layout-container">
    <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
      <div id="home-page">
        <div id="site-links">
          <h2>{{ $t("SITE.CONTENT") }} :</h2>
          <ul>
            <li>
              <NuxtLink :to="localePath('cv')">{{ $t("CV.MESSAGE") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('projets')">{{ $t("PROJECTS.MESSAGE") }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('blog')">{{ $t("BLOG.MESSAGE") }}</NuxtLink
              ><span>&nbsp;</span>(<a id="rss-feed-link" :href="rssFeedFile">{{ $t("RSS.FEED") }}</a
              >)
            </li>
            <li>
              <NuxtLink :to="localePath('contact')">{{ $t("CONTACT.MESSAGE") }}</NuxtLink>
            </li>
          </ul>
        </div>

        <h2 id="blog-title">
          <a href="/blog">{{ $t("RECENT.ARTICLES") }}</a>
        </h2>

        <ContentList v-slot="{ list }" :query="query">
          <ol>
            <li v-for="article in list" :key="article._path">
              <Post :post="article" />
            </li>
          </ol>
        </ContentList>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
import Post from "~/components/Post.vue";
import { rssFeedFile } from "~/data/SiteData";

const localePath = useLocalePath();
const titleCode = "INDEX.PAGE.TITLE";
const descriptionCode = "INDEX.PAGE.DESCRIPTION";

const query: QueryBuilderParams = { path: "/blog", limit: 5, sort: [{ date: -1 }] };
</script>

<style lang="scss" scoped>
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

    a {
      color: black;
    }
  }

  ol {
    list-style-type: none;
  }
}
</style>
