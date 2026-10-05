import React from "react";
import Post from "~/components/Post/Post";
import Seo from "~/components/Seo";
import RssFeed from "@mui/icons-material/RssFeed";
import { DEFAULT_LOCALE, rssFeedFile } from "~/data/SiteData";
import { getAllPosts } from "~/utils/content";
import { t } from "~/utils/i18n";
import "./BlogPage.scss";

export default function BlogPage({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const articles = getAllPosts().slice(0, 5);

  return (
    <>
      <Seo
        titleCode="BLOG.PAGE.TITLE"
        descriptionCode="BLOG.PAGE.DESCRIPTION"
        path={locale === "en" ? "/en/blog" : "/blog"}
        locale={locale}
      />
      <h1 id="page-header">{t("BLOG.PAGE.TITLE", locale)}</h1>
      <div id="page-description">{t("BLOG.PAGE.DESCRIPTION", locale)}</div>
      <div id="rss-link-container">
        <span>{t("RSS.FEED.MESSAGE", locale)} :</span>
        <a href={rssFeedFile}>
          <RssFeed id="rss-feed-icon" />
        </a>
      </div>
      <ol id="articles-list">
        {articles.map((article) => (
          <li key={article.path}>
            <Post post={article} locale={locale} />
          </li>
        ))}
      </ol>
    </>
  );
}
