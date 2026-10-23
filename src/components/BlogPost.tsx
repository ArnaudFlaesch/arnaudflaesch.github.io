import Link from "next/link";
import Bio from "~/components/Bio";
import ShareButtons from "~/components/ShareButtons";
import { siteUrl, type Locale } from "~/data/SiteData";
import type { BlogPost as Post } from "~/utils/content";
import { FULL_DATE, formatDate } from "~/utils/date";
import { getLocalePath, t } from "~/utils/i18n";

interface BlogPostProps {
  post: Post;
  previous?: Post;
  next?: Post;
  locale: Locale;
}

export default function BlogPost({ post, previous, next, locale }: BlogPostProps) {
  return (
    <>
      <article className="blog-post" itemScope itemType="https://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <p>
            <time dateTime={post.date}>{formatDate(post.date, locale, FULL_DATE)}</time>
          </p>
          {post.description}
        </header>
        <figure>
          <img className="article-illustration" src={`/blog/${post.image}`} width={600} alt="Illustration article" />
          {post.imageSubtitle && <figcaption dangerouslySetInnerHTML={{ __html: post.imageSubtitle }} />}
        </figure>
        <section itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer className="blog-post-footer">
          <Bio locale={locale} />
          <div className="share-article-container">
            <span>{t("SHARE.ARTICLE", locale)}</span>
            <ShareButtons url={`${siteUrl}${post.path}`} locale={locale} />
          </div>
        </footer>
      </article>

      <nav className="blog-post-nav">
        <ul>
          <li>
            {previous && (
              <Link href={getLocalePath(previous.path, locale)} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link href={getLocalePath(next.path, locale)} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
