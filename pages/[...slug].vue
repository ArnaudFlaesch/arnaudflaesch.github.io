<template>
  <main>
    <NuxtLayout>
      <ContentDoc v-slot="{ doc }">
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
              width="600"
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
                <a href="#" v-on:click="handleShare(`${facebookShareUrl}${href}`)">
                  <v-tooltip text="Partager sur Facebook" location="top">
                    <template v-slot:activator="{ props }">
                      <v-icon v-bind="props">{{ mdiFacebook }}</v-icon>
                    </template>
                  </v-tooltip>
                </a>

                <a href="#" v-on:click="handleShare(`${twitterShareUrl}${href}`)">
                  <v-tooltip text="Partager sur X" location="top">
                    <template v-slot:activator="{ props }">
                      <v-icon v-bind="props">{{ mdiTwitter }}</v-icon>
                    </template>
                  </v-tooltip>
                </a>

                <a href="#" v-on:click="handleShare(`${linkedinShareUrl}${href}`)">
                  <v-tooltip text="Partager sur LinkedIn" location="top">
                    <template v-slot:activator="{ props }">
                      <v-icon v-bind="props">{{ mdiLinkedin }}</v-icon>
                    </template>
                  </v-tooltip>
                </a>
              </div>
            </div>
          </footer>
        </article>
        <!--
        <nav className="blog-post-nav">
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
        -->
      </ContentDoc>
    </NuxtLayout>
  </main>
</template>

<script lang="ts" setup>
import { format } from 'date-fns';
import { mdiFacebook, mdiTwitter, mdiLinkedin } from '@mdi/js';
const { locale } = useI18n();import { getLocaleFromLanguage } from '~/utils/DateUtils';

const href = 'doc.path';

const blogUrlPrefix = '/blog/';

const facebookShareUrl = 'https://www.facebook.com/sharer.php?u=';
const twitterShareUrl = 'https://twitter.com/share?url=';
const linkedinShareUrl = 'https://www.linkedin.com/shareArticle?url=';

function handleShare(url: string): void {
  window.open(encodeURI(url), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=700');
}

</script>

<style lang="scss" scoped>
.blog-post {
  .article-illustration {
    margin: 1em auto 0.5em;
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
