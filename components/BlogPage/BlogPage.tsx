import React from "react";
import DefaultLayout from "~/components/DefaultLayout/DefaultLayout";
import Post from "~/components/Post/Post";
import RssFeed from "@mui/icons-material/RssFeed";
import { DEFAULT_LOCALE, rssFeedFile } from "~/data/SiteData";
import { getAllPosts } from "~/utils/content";
import { t } from "~/utils/i18n";
import "./BlogPage.scss";

export default function BlogPage({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const titleCode = "BLOG.PAGE.TITLE";
  const descriptionCode = "BLOG.PAGE.DESCRIPTION";
  const articles = getAllPosts().slice(0, 5);

  return (
    <DefaultLayout titleCode={titleCode} descriptionCode={descriptionCode} locale={locale}>
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
    </DefaultLayout>
  );
}
