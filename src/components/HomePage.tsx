import Link from "next/link";
import PostList from "~/components/PostList";
import { rssFeedFile, type Locale } from "~/data/SiteData";
import { getAllPosts } from "~/utils/content";
import { getLocalePath, t } from "~/utils/i18n";

const RECENT_POSTS_COUNT = 5;

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <div id="site-links">
        <h2>{t("SITE.CONTENT", locale)} :</h2>
        <ul>
          <li>
            <Link href={getLocalePath("/cv", locale)}>{t("CV.MESSAGE", locale)}</Link>
          </li>
          <li>
            <Link href={getLocalePath("/projets", locale)}>{t("PROJECTS.MESSAGE", locale)}</Link>
          </li>
          <li>
            <Link href={getLocalePath("/blog", locale)}>{t("BLOG.MESSAGE", locale)}</Link> (
            <a id="rss-feed-link" href={rssFeedFile}>
              {t("RSS.FEED", locale)}
            </a>
            )
          </li>
          <li>
            <Link href={getLocalePath("/contact", locale)}>{t("CONTACT.MESSAGE", locale)}</Link>
          </li>
        </ul>
      </div>

      <h2 id="blog-title">
        <Link href={getLocalePath("/blog", locale)}>{t("RECENT.ARTICLES", locale)}</Link>
      </h2>
      <PostList posts={getAllPosts().slice(0, RECENT_POSTS_COUNT)} locale={locale} />
    </>
  );
}
