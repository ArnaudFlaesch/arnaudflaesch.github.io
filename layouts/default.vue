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

<style lang="scss">
#site-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  #fixed-header {
    position: sticky;
    top: 0;
    flex: 0 0 4.5rem;
    z-index: 9999;
    background-color: $header-background-color;
  }

  #site-body {
    display: flex;
    padding: 2em 5em;
    flex: 1 0 calc(100% - 4.5rem);
    overflow-y: auto;

    #profile-container {
      flex: 0 1 20%;
    }

    #site-page {
      display: flex;
      flex-direction: column;
      flex: 0 0 80%;

      padding: 0 5%;
      justify-content: space-between;

      &.blog-view {
        max-width: 80%;
      }

      #site-content {
        display: flex;
        flex-direction: column;

        #page-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: first baseline;
        }

        #page-description {
          margin-top: 1em;
          margin-bottom: 3em;
        }
      }

      footer {
        margin-top: 2em;
      }
    }
  }
}

@media (width <= 700px) {
  #site-container {
    #site-body {
      flex-direction: column;
      padding: 1em 1em 2em 1em;

      #profile-container {
        flex-basis: 10%;

        &.blog-view {
          display: none;
        }

        #profile {
          gap: 0.5em;
          display: grid;
          justify-items: center;

          #bio,
          .social-link > span {
            display: none;
          }

          #social-links {
            flex-direction: row;
            justify-content: center;
            gap: 1em;
          }
        }
      }

      #site-page {
        margin-top: 2em;
        padding: 0.2em;
        max-width: 100%;
        flex-basis: 90%;

        &.blog-view {
          max-width: 100%;
        }

        #site-content {
          padding: 0 1em;

          #page-header {
            margin-top: 0;
          }

          #page-description {
            margin: 0.5em 0 2em;
          }
        }
      }
    }
  }
}
</style>
