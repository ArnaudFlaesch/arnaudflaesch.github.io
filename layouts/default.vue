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
          <div id="page-header">
            <h1 id="page-title" v-if="titleCode">{{ $t(titleCode) }}</h1>
            <!--<Tooltip title="Flux RSS" v-if="route.fullPath.endsWith('/blog/')">
              <a href="{rss}"> 
                <RssFeed id="rss-feed-icon" />
              </a>
            </Tooltip>-->
          </div>
          <div id="page-description" v-if="descriptionCode">
            {{ $t(descriptionCode) }}
          </div>
          <slot />
        </main>
        <footer>
          © 2024, {{ $t('DEVELOPED.WITH') }} <a href="https://www.gatsbyjs.com/">Gatsby</a>. {{ $t('ICONS.BY') }} :
          <a href="https://icons8.com/">Icons8</a>.
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
const route = useRoute();
const { titleCode, descriptionCode }: { titleCode: string; descriptionCode: string } = useAttrs();
</script>

<style lang="scss">
$header-background-color: #2c77a8;
$header-text-color: black;
$body-background-color: #dfdddd;
$detail-block-border-color: #1f5099;

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
