import React from "react";
import Link from "next/link";
import Post from "~/components/Post/Post";
import { DEFAULT_LOCALE, rssFeedFile } from "~/data/SiteData";
import { getAllPosts } from "~/utils/content";
import { t, getLocalePath } from "~/utils/i18n";
import "./HomePage.scss";

export default function HomePage({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const articles = getAllPosts().slice(0, 5);

  return (
    <div id="home-page">
      <h1 id="page-header">{t("INDEX.PAGE.TITLE", locale)}</h1>
      <div id="page-description">{t("INDEX.PAGE.DESCRIPTION", locale)}</div>

      <div id="site-links">
        <h2>{t("SITE.CONTENT", locale)} :</h2>
        <ul>
          <li>
            <Link href={getLocalePath("cv", locale)}>{t("CV.MESSAGE", locale)}</Link>
          </li>
          <li>
            <Link href={getLocalePath("projets", locale)}>{t("PROJECTS.MESSAGE", locale)}</Link>
          </li>
          <li>
            <Link href={getLocalePath("blog", locale)}>{t("BLOG.MESSAGE", locale)}</Link>
            <span>&nbsp;</span>(
            <a id="rss-feed-link" href={rssFeedFile}>
              {t("RSS.FEED", locale)}
            </a>
            )
          </li>
          <li>
            <Link href={getLocalePath("contact", locale)}>{t("CONTACT.MESSAGE", locale)}</Link>
          </li>
        </ul>
      </div>

      <h2 id="blog-title">
        <Link href={getLocalePath("blog", locale)}>{t("RECENT.ARTICLES", locale)}</Link>
      </h2>

      <ol>
        {articles.map((article) => (
          <li key={article.path}>
            <Post post={article} locale={locale} />
          </li>
        ))}
      </ol>
    </div>
  );
}
