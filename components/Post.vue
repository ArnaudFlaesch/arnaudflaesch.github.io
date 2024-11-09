<template>
  <article class="post-list-item" itemScope itemType="https://schema.org/Article">
    <NuxtLink :to="localePath(props.post._path ?? '/')">
      <header>
        <h3>
          <span itemProp="headline">{{ props.post.title }}</span>
        </h3>
        <small>{{ formatPublicationDate(props.post.date) }}</small>
      </header>
      <div class="article-preview">
        <NuxtImg :src="`/blog/${props.post.image}`" :width="300" class="blog-thumbnail" alt="Illustration article" />
        <section>
          <p class="description" itemProp="description">{{ props.post.description }}</p>
        </section>
      </div>
    </NuxtLink>
  </article>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { format } from 'date-fns';
import type { ParsedContent } from '@nuxt/content';
import { getLocaleFromLanguage } from '~/utils/DateUtils';

const localePath = useLocalePath();
const { locale } = useI18n();

const props = defineProps({
  post: {
    type: Object as () => ParsedContent,
    required: true
  }
});

function formatPublicationDate(date: string) {
  return format(date, 'dd MMMM, yyyy', {
    locale: getLocaleFromLanguage(locale.value)
  });
}
</script>

<style lang="scss" scoped>
.post-list-item {
  margin: 2rem 0;

  a {
    text-decoration: none;
    color: unset;
  }

  p {
    margin-bottom: 0;
  }

  h2 {
    /* stylelint-disable */
    font-size: 1.728rem;
    /* stylelint-enable */
    color: #005b99;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  header {
    margin-bottom: 1rem;
  }

  .article-preview {
    .blog-thumbnail {
      max-height: 300px;
      max-width: 300px;
      border-radius: 2%;
    }

    @media (width > 700px) {
      display: flex;
      flex-direction: row;
      column-gap: 1em;

      .description {
        max-width: 25em;
      }
    }
  }
}
</style>
