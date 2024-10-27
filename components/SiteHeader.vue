<template>
  <span id="portfolio-header">
    <h1>
      <NuxtLink :to="localePath('/')">{{ fullName }}</NuxtLink>
    </h1>
    <div id="right-navbar">
      <div id="url-list">
        <NuxtLink :key="url.path" v-for="url in urls" exactActiveClass="active" :to="localePath(url.path)">
          <v-icon :aria-label="$t(url.label)" aria-hidden="false"> {{ url.icon }} </v-icon>{{ $t(url.label) }}
        </NuxtLink>
      </div>

      <div id="switch-language">
        <button v-if="locale === DEFAULT_LOCALE" @click="setLocale('en')">
          <NuxtImg height="{30}" src="/icons/languages/us-flag.png" />
        </button>
        <button v-else @click="setLocale(DEFAULT_LOCALE)">
          <NuxtImg height="{30}" src="/icons/languages/french-flag.png" />
        </button>
      </div>
    </div>
  </span>
</template>

<script lang="ts" setup>
import { mdiHomeOutline , mdiBriefcaseVariantOutline , mdiBookOutline , mdiCodeBraces , mdiEmailOutline } from '@mdi/js';
import { fullName, DEFAULT_LOCALE } from '~/data/SiteData';
interface IUrl {
  icon: string;
  path: string;
  label: string;
}

const urls: IUrl[] = [
  {
    path: '/',
    label: 'HOME.LABEL',
    icon: mdiHomeOutline
  },
  {
    path: 'cv',
    label: 'RESUME.LABEL',
    icon: mdiBriefcaseVariantOutline 
  },
  {
    path: 'blog',
    label: 'BLOG.LABEL',
    icon: mdiBookOutline 
  },
  {
    path: 'projects',
    label: 'PROJECTS.LABEL',
    icon: mdiCodeBraces 
  },
  {
    path: 'contact',
    label: 'CONTACT.LABEL',
    icon: mdiEmailOutline
  }
];

const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
</script>

<style lang="scss" scoped>
$header-background-color: #2c77a8;
$header-text-color: black;
$body-background-color: #dfdddd;
$detail-block-border-color: #1f5099;

#portfolio-header {
  height: 100%;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: space-between;
  padding: 0 3em;

  @media (width <= 600px) {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
  }

  a {
    display: flex;
    flex-direction: row;
    column-gap: 0.5em;
    color: $header-text-color;
    text-decoration: none;
  }

  h1 {
    font-size: x-large;
    margin: auto 0 auto 2em;
    flex: 2 2 40%;
  }

  @media (width <= 600px) {
    padding: 0 0.5em;

    h1 {
      margin-left: 0.5em;
    }
  }

  #right-navbar {
    display: flex;
    flex-direction: row;
    flex: 2 1 60%;
    height: 100%;

    @media (width >= 950px) {
      column-gap: 2.2em;
    }

    #url-list {
      height: 100%;
      display: flex;
      flex-flow: row;
      flex: 1 1 50%;

      @media (width <= 950px) {
        display: grid;
        row-gap: 0.2em;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
      }

      @media (width <= 600px) {
        column-gap: 0.2em;
      }

      > a {
        display: flex;
        align-items: center;
        padding: 0 0.5em;
        flex: 1;
        border-radius: 2%;

        @media (width >= 950px) {
          justify-content: center;
        }

        svg {
          margin-right: 0.5em;
        }

        &.active {
          background-color: #8bb3cc;
        }

        &:hover {
          background-color: white;
        }

        @media (width <= 600px) {
          padding: 0 0.2em;

          svg {
            margin-right: 0.15em;
          }
        }
      }
    }

    #switch-language {
      margin: auto 0;

      img {
        min-width: 100%;
      }
    }
  }
}
</style>
