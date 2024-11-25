<template>
  <span id="portfolio-header">
    <h1>
      <NuxtLink :to="localePath('/')">{{ fullName }}</NuxtLink>
    </h1>
    <div id="right-navbar">
      <div id="url-list">
        <NuxtLink v-for="url in urls" :key="url.path" exact-active-class="active" :to="localePath(url.path)">
          <component :is="url.icon"></component>
          {{ $t(url.label) }}
        </NuxtLink>
      </div>

      <div id="switch-language">
        <button v-if="locale === DEFAULT_LOCALE" @click="setLocale('en')">
          <NuxtImg :height="30" alt="us flag" src="/icons/languages/us-flag.png" />
        </button>
        <button v-else @click="setLocale(DEFAULT_LOCALE)">
          <NuxtImg :height="30" alt="french flag" src="/icons/languages/french-flag.png" />
        </button>
      </div>
    </div>
  </span>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import BookOutline from "~/components/icons/BookOutline.vue";
import HomeTwoTone from "~/components/icons/HomeTwoTone.vue";
import MdiCode from "~/components/icons/MdiCode.vue";
import MdiEmailOutline from "~/components/icons/MdiEmailOutline.vue";
import WorkTwoTone from "~/components/icons/WorkTwoTone.vue";
import { DEFAULT_LOCALE, fullName } from "~/data/SiteData";

interface IUrl {
  icon: unknown;
  path: string;
  label: string;
}

const urls: IUrl[] = [
  {
    path: "/",
    label: "HOME.LABEL",
    icon: HomeTwoTone
  },
  {
    path: "/cv/",
    label: "RESUME.LABEL",
    icon: WorkTwoTone
  },
  {
    path: "/blog/",
    label: "BLOG.LABEL",
    icon: BookOutline
  },
  {
    path: "/projets/",
    label: "PROJECTS.LABEL",
    icon: MdiCode
  },
  {
    path: "/contact/",
    label: "CONTACT.LABEL",
    icon: MdiEmailOutline
  }
];

const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
</script>

<style lang="scss" scoped>
#portfolio-header {
  height: 100%;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: space-between;
  padding: 0 3em;
  column-gap: 1em;

  svg {
    width: 30px;
  }

  a {
    display: flex;
    flex-direction: row;
    column-gap: 0.5em;
    color: $header-text-color;
    text-decoration: none;
    width: fit-content;
  }

  h1 {
    font-size: x-large;
    margin: auto 0 auto 2em;
    flex: 2 2 40%;

    @media (width <= 1150px) and (width >= 700px) {
      flex: 1 2 20%;
      margin: unset;
    }
  }

  #right-navbar {
    display: flex;
    flex-direction: row;
    flex-basis: 70%;
    height: 100%;

    @media (width >= 950px) {
      flex: 2 1 60%;
      column-gap: 2.2em;
    }

    #url-list {
      height: 100%;
      display: flex;
      flex-flow: row;
      flex: 1 1 50%;
      flex-wrap: wrap;

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
      }
    }

    #switch-language {
      margin: auto 0;

      img {
        min-width: 100%;
        min-height: 2em;
      }
    }
  }

  @media (width <= 700px) {
    padding: 0 0.5em;
    column-gap: 0.5em;

    h1 {
      flex: 1 2 20%;
      margin-left: 0.5em;
    }

    #right-navbar {
      flex: 2 1 80%;

      #url-list {
        column-gap: 0.2em;
        svg {
          height: 2em;
          width: 1.5em;
        }

        > a {
          column-gap: 0.2em;
          padding: 0;

          svg {
            height: 2em;
            width: 1.5em;
          }
        }
      }
    }
  }
}
</style>
