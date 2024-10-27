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
        <NuxtImg :src="`/blog/${props.post.image}`" class="blog-thumbnail" alt="Illustration article" />
        <section>
          <p class="description" itemProp="description">{{ props.post.description }}</p>
        </section>
      </div>
    </NuxtLink>
  </article>
</template>

<script lang="ts" setup>
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
  margin-bottom: var(--spacing-8);
  margin-top: var(--spacing-8);

  a {
    text-decoration: none;
    color: unset;
  }

  p {
    margin-bottom: var(--spacing-0);
  }

  h2 {
    /* stylelint-disable */
    font-size: var(--fontSize-4);
    /* stylelint-enable */
    color: var(--color-primary);
    margin-bottom: var(--spacing-2);
    margin-top: var(--spacing-0);
  }

  header {
    margin-bottom: var(--spacing-4);
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
