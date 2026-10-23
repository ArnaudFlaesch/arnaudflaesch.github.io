import Link from "next/link";
import type { Locale } from "~/data/SiteData";
import type { BlogPost } from "~/utils/content";
import { FULL_DATE, formatDate } from "~/utils/date";
import { getLocalePath } from "~/utils/i18n";

export default function PostList({ posts, locale }: { posts: BlogPost[]; locale: Locale }) {
  return (
    <ol className="post-list">
      {posts.map((post) => (
        <li key={post.slug}>
          <article className="post-list-item" itemScope itemType="https://schema.org/Article">
            <Link href={getLocalePath(post.path, locale)}>
              <header>
                <h3 itemProp="headline">{post.title}</h3>
                <time dateTime={post.date}>{formatDate(post.date, locale, FULL_DATE)}</time>
              </header>
              <div className="article-preview">
                <img src={`/blog/${post.image}`} width={300} className="blog-thumbnail" alt="Illustration article" />
                <p className="description" itemProp="description">
                  {post.description}
                </p>
              </div>
            </Link>
          </article>
        </li>
      ))}
    </ol>
  );
}
