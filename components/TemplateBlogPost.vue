<template>
  <article class="blog-post" itemScope itemType="https://schema.org/Article">
    <header>
      <h1 itemProp="headline">{{ doc.title }}</h1>
      <p>{{ format(doc.date, 'dd MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}</p>
      {{ doc.description }}
    </header>
    <p>
      <NuxtImg
        class="article-illustration"
        :src="blogUrlPrefix + doc.image"
        :width="600"
        :height="400"
        alt="Illustration article"
      />
      <em v-html="doc.imageSubtitle" />
    </p>
    <section itemProp="articleBody">
      <ContentRenderer :value="doc" />
    </section>
    <hr />
    <footer class="blog-post-footer">
      <Bio />
      <div class="share-article-container">
        <span>Partager cet article :</span>
        <div id="share-buttons">
          <v-no-ssr>
            <a href="#" @click="handleShare(`${facebookShareUrl}${doc.path}`)">
              <v-tooltip text="Partager sur Facebook" location="top">
                <template #activator="{ props }">
                  <v-icon v-bind="props">{{ mdiFacebook }}</v-icon>
                </template>
              </v-tooltip>
            </a>

            <a href="#" @click="handleShare(`${twitterShareUrl}${doc.path}`)">
              <v-tooltip text="Partager sur X" location="top">
                <template #activator="{ props }">
                  <v-icon v-bind="props">{{ mdiTwitter }}</v-icon>
                </template>
              </v-tooltip>
            </a>

            <a href="#" @click="handleShare(`${linkedinShareUrl}${doc.path}`)">
              <v-tooltip text="Partager sur LinkedIn" location="top">
                <template #activator="{ props }">
                  <v-icon v-bind="props">{{ mdiLinkedin }}</v-icon>
                </template>
              </v-tooltip>
            </a>
          </v-no-ssr>
        </div>
      </div>
    </footer>
  </article>

  <nav className="blog-post-nav">
    <ul>
      <li>
        <NuxtLink v-if="previous?._path" :to="localePath(previous._path)" rel="prev"> ← {{ previous.title }} </NuxtLink>
      </li>
      <li>
        <NuxtLink v-if="next?._path" :to="localePath(next._path)" rel="next"> {{ next.title }} → </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { format } from 'date-fns';
import { mdiFacebook, mdiTwitter, mdiLinkedin } from '@mdi/js';
import { getLocaleFromLanguage } from '~/utils/DateUtils';
import type { ParsedContent } from '@nuxt/content';

defineProps({
  doc: {
    type: Object as () => ParsedContent,
    required: true
  },
  previous: {
    type: Object as () => Pick<ParsedContent, 'title' | '_path'>,
    required: false,
    default: null
  },
  next: {
    type: Object as () => Pick<ParsedContent, 'title' | '_path'>,
    required: false,
    default: null
  }
});

const { locale } = useI18n();
const localePath = useLocalePath();

const blogUrlPrefix = '/blog/';

const facebookShareUrl = 'https://www.facebook.com/sharer.php?u=';
const twitterShareUrl = 'https://twitter.com/share?url=';
const linkedinShareUrl = 'https://www.linkedin.com/shareArticle?url=';

function handleShare(url: string): void {
  window.open(encodeURI(url), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=700');
}
</script>

<style lang="scss">
.blog-post {
  .article-illustration {
    margin: 1em auto 0.5em;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  img {
    display: flex;
    margin: 0.2em auto;
  }

  img + em {
    display: inline-block;
    font-size: 0.8rem;
    color: #4b4545;
    margin-top: 0.2em;
    width: 100%;
    text-align: center;
    white-space: pre-line;
  }

  .blog-post-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .share-article-container {
      display: flex;
      flex-direction: row;
      align-content: center;
      flex: 0 1 60%;
      align-items: baseline;
      margin-right: 1em;

      #share-buttons {
        display: flex;
        flex-direction: row;
      }

      svg {
        height: 37px;
        width: 37px;
      }
    }
  }
}

.blog-post-nav {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
}

@media (width >= 950px) {
  article {
    img {
      max-width: 600px;
      max-height: 500px;
    }
  }
}

@media (width<= 600px) {
  .blog-post {
    .blog-post-footer {
      .share-article-container {
        flex-direction: column;
      }
    }
  }
}
</style>
