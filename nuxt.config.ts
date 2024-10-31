import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { DEFAULT_LOCALE, locales, author, siteName, siteUrl, title } from './data/SiteData';
import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: false
  },
  css: ['~/assets/styles.scss', '~/assets/global.scss'],
  site: {
    url: siteUrl,
    name: title
  },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: author },
        { name: 'creator', content: author },
        { name: 'og:site_name', content: siteName },
        { name: 'google-site-verification', content: 'LKNW3ns7yC7LiA86Oz56msNTna7-nqN3JiX7IltrMeU' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    }
  },
  content: {
    contentHead: false,
    locales: locales,
    defaultLocale: DEFAULT_LOCALE
  },
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    'nuxt-graphql-client',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    }
  ],
  'graphql-client': {
    clients: {
      default: {
        headers: { 'user-agent': 'node.js' },
        host: 'https://api.github.com/graphql',
        token: {
          type: 'Bearer',
          name: 'Authorization',
          value: process.env.PORTFOLIO_GITHUB_TOKEN
        }
      }
    }
  },
  robots: {
    robotsTxt: false
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    baseUrl: siteUrl,
    locales: [
      {
        code: 'fr',
        language: 'fr-FR'
      },
      {
        code: 'en',
        language: 'en-US'
      }
    ],
    defaultLocale: DEFAULT_LOCALE,
    strategy: 'prefix_except_default'
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: ['/sitemap.xml']
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "~/assets/colors.scss" as *;'
        }
      }
    }
  }
});
