<template>
  <div id="site-container">
    <header id="fixed-header">
      <SiteHeader />
    </header>
    <div id="site-body">
      <div id="profile-container">
        <SiteProfile />
      </div>
      <div id="site-page">
        <main id="site-content">
          <div v-if="titleCode" id="page-header">
            <h1 id="page-title">{{ $t(titleCode) }}</h1>
            <!--<Tooltip title="Flux RSS" v-if="route.fullPath.endsWith('/blog/')">
              <a href="{rss}"> 
                <RssFeed id="rss-feed-icon" />
              </a>
            </Tooltip>-->
          </div>
          <div v-if="descriptionCode" id="page-description">
            {{ $t(descriptionCode) }}
          </div>
          <slot />
        </main>
        <footer>
          © 2024, {{ $t('DEVELOPED.WITH') }} <a href="https://nuxt.com/">Nuxt</a>. {{ $t('ICONS.BY') }} :
          <a href="https://icons8.com/">Icons8</a>.
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const localePath = useLocalePath();
const route = useRoute();
const { titleCode, descriptionCode }: { titleCode: string; descriptionCode: string } = useAttrs();
const { t } = useI18n();
if (titleCode && descriptionCode) {
  useSeoMeta({
    title: titleCode !== 'INDEX.PAGE.TITLE' ? t(titleCode) : '',
    ogTitle: t(titleCode),
    description: t(descriptionCode),
    ogDescription: t(descriptionCode)
  });
}
</script>

<style lang="scss">
@import '../styles/colors.scss';

#site-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  #fixed-header {
    position: sticky;
    top: 0;
    flex: 0 0 4.5rem;
    z-index: 9999;
    background-color: $header-background-color;
  }

  #site-body {
    display: flex;
    flex: 0 1 calc(100% - 4.5rem);
    padding: 2em 6em;

    #site-page {
      display: flex;
      flex-direction: column;
      flex: 0 0 80%;
      max-width: 80%;
      padding: 0 8%;
      justify-content: space-between;

      #site-content {
        display: flex;
        flex-direction: column;

        #page-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: first baseline;

          #rss-feed-icon {
            color: white;
            background-color: orange;
            height: 35px;
            width: 35px;
            border-radius: 5px;
          }
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
      padding: 0.2em;

      #profile-container {
        &.blog-view {
          display: none;
        }
      }

      #profile {
        margin-top: 1em;
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
          margin-top: 0.5em;
          gap: 1em;
        }
      }

      #site-page {
        margin-top: 2em;
        padding: 0.2em;
        max-width: 100%;

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
