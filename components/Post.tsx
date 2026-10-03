import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import type { BlogPost } from "~/utils/content";
import { getLocaleFromLanguage } from "~/utils/DateUtils";
import { getLocalePath } from "~/utils/i18n";
import { DEFAULT_LOCALE } from "~/data/SiteData";

interface PostProps {
  post: BlogPost;
  locale?: string;
}

export default function Post({ post, locale = DEFAULT_LOCALE }: PostProps) {
  const formattedDate = post.date
    ? format(new Date(post.date), "dd MMMM, yyyy", {
        locale: getLocaleFromLanguage(locale)
      })
    : "";

  return (
    <article className="post-list-item" itemScope itemType="https://schema.org/Article">
      <Link href={getLocalePath(post.path, locale)}>
        <header>
          <h3>
            <span itemProp="headline">{post.title}</span>
          </h3>
          <small>{formattedDate}</small>
        </header>
        <div className="article-preview">
          <img src={`/blog/${post.image}`} width={300} className="blog-thumbnail" alt="Illustration article" />
          <section>
            <p className="description" itemProp="description">
              {post.description}
            </p>
          </section>
        </div>
      </Link>
    </article>
  );
}
