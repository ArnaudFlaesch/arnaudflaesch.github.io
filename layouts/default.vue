<template>
  <div id="site-container">
    <header id="fixed-header">
      <SiteHeader />
    </header>
    <div id="site-body">
      <div id="profile-container" :class="{ 'blog-view': blogView }">
        <SiteProfile />
      </div>
      <div id="site-page" :class="{ 'blog-view': blogView }">
        <main id="site-content">
          <h1 v-if="titleCode" id="page-header">{{ $t(titleCode) }}</h1>
          <div v-if="descriptionCode" id="page-description">
            {{ $t(descriptionCode) }}
          </div>
          <slot />
        </main>
        <footer>
          <span
            >© 2024, {{ $t("DEVELOPED.WITH") }} <a href="https://nuxt.com/">Nuxt</a>. {{ $t("ICONS.BY") }} :
            <a href="https://icons8.com/">Icons8</a>.</span
          >
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { DEFAULT_LOCALE, defaultImageUrl, fullName, jobName, siteUrl } from "~/data/SiteData";
const localePath = useLocalePath();
const route = useRoute();
const { titleCode, descriptionCode, blogView }: { titleCode: string; descriptionCode: string; blogView?: string } =
  useAttrs();
const { t, locale } = useI18n();

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true
});

const links = head.value.link.map((link) => {
  return { id: link.id, rel: "alternate", ref: link.href + "/", href: link.href + "/", hreflang: link.hreflang };
});

const hrefLangDefaultLink = links.filter((link) => link.hreflang === DEFAULT_LOCALE)[0] ?? {};

useHead({
  htmlAttrs: {
    lang: locale
  },
  link: [
    { id: hrefLangDefaultLink["id"] + "-canonical", rel: "canonical", href: hrefLangDefaultLink.href },
    { ...hrefLangDefaultLink, id: hrefLangDefaultLink["id"] + "-x-default", hreflang: "x-default" },
    ...links
  ]
});

if (titleCode && descriptionCode) {
  const defaultTitle = `${fullName} - ${t(jobName)}`;
  const title = titleCode !== "INDEX.PAGE.TITLE" ? [t(titleCode), defaultTitle].join(" | ") : defaultTitle;
  const ogImage = `${siteUrl}${defaultImageUrl}`;

  useSeoMeta({
    title: title,
    ogTitle: title,
    ogUrl: `${siteUrl}${route.fullPath}`,
    ogType: "website",
    ogLocale: locale,
    description: t(descriptionCode),
    ogDescription: t(descriptionCode),
    ogImage: ogImage,
    ogImageUrl: ogImage
    //   twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player'
    //twitterTitle: string
    //   twitterDescription: string
    // twitterImage: string | Array ab
  });
}
</script>
