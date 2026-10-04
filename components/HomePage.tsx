import React from "react";
import Link from "next/link";
import DefaultLayout from "~/components/DefaultLayout";
import Post from "~/components/Post";
import { DEFAULT_LOCALE, rssFeedFile } from "~/data/SiteData";
import { getAllPosts } from "~/utils/content";
import { t, getLocalePath } from "~/utils/i18n";

export default function HomePage({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const titleCode = "INDEX.PAGE.TITLE";
  const descriptionCode = "INDEX.PAGE.DESCRIPTION";
  const articles = getAllPosts().slice(0, 5);

  return (
    <div className="layout-container">
      <DefaultLayout titleCode={titleCode} descriptionCode={descriptionCode} locale={locale}>
        <div id="home-page">
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
      </DefaultLayout>
    </div>
  );
}
