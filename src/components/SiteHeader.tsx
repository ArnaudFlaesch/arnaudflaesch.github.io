"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import BookOutlined from "@mui/icons-material/BookOutlined";
import Code from "@mui/icons-material/Code";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import HomeTwoTone from "@mui/icons-material/HomeTwoTone";
import WorkTwoTone from "@mui/icons-material/WorkTwoTone";
import { DEFAULT_LOCALE, fullName, type Locale } from "~/data/SiteData";
import { getLocalePath, parsePath, t } from "~/utils/i18n";

const NAV_LINKS = [
  { path: "/", label: "HOME.LABEL", icon: <HomeTwoTone /> },
  { path: "/cv", label: "RESUME.LABEL", icon: <WorkTwoTone /> },
  { path: "/blog", label: "BLOG.LABEL", icon: <BookOutlined /> },
  { path: "/projets", label: "PROJECTS.LABEL", icon: <Code /> },
  { path: "/contact", label: "CONTACT.LABEL", icon: <EmailOutlined /> }
];

export default function SiteHeader({ locale, pathname }: { locale: Locale; pathname: string }) {
  const router = useRouter();
  const currentPath = `/${parsePath(pathname).segments.join("/")}`;
  const otherLocale: Locale = locale === DEFAULT_LOCALE ? "en" : DEFAULT_LOCALE;

  const isActive = (path: string) =>
    path === "/" ? currentPath === "/" : currentPath === path || currentPath.startsWith(`${path}/`);

  return (
    <div id="portfolio-header">
      <h1>
        <Link href={getLocalePath("/", locale)}>{fullName}</Link>
      </h1>
      <nav id="right-navbar">
        <div id="url-list">
          {NAV_LINKS.map(({ path, label, icon }) => (
            <Link key={path} className={isActive(path) ? "active" : undefined} href={getLocalePath(path, locale)}>
              {icon}
              {t(label, locale)}
            </Link>
          ))}
        </div>

        <div id="switch-language">
          <button type="button" onClick={() => router.push(getLocalePath(currentPath, otherLocale))}>
            {otherLocale === "en" ? (
              <img height={30} alt="us flag" src="/icons/languages/us-flag.png" />
            ) : (
              <img height={30} alt="french flag" src="/icons/languages/french-flag.png" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
