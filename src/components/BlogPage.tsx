import RssFeed from "@mui/icons-material/RssFeed";
import PostList from "~/components/PostList";
import { rssFeedFile, type Locale } from "~/data/SiteData";
import { getAllPosts } from "~/utils/content";
import { t } from "~/utils/i18n";

export default function BlogPage({ locale }: { locale: Locale }) {
  return (
    <>
      <div id="rss-link-container">
        <span>{t("RSS.FEED.MESSAGE", locale)} :</span>
        <a href={rssFeedFile}>
          <RssFeed id="rss-feed-icon" />
        </a>
      </div>
      <PostList posts={getAllPosts()} locale={locale} />
    </>
  );
}
