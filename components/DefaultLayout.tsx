import React from "react";
import SiteHeader from "~/components/SiteHeader";
import SiteProfile from "~/components/SiteProfile";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";

interface DefaultLayoutProps {
  children: React.ReactNode;
  titleCode?: string;
  titleHeader?: React.ReactNode;
  descriptionCode?: string;
  blogView?: boolean;
  locale?: string;
}

export default function DefaultLayout({
  children,
  titleCode,
  titleHeader,
  descriptionCode,
  blogView = false,
  locale = DEFAULT_LOCALE
}: DefaultLayoutProps) {
  return (
    <div className="layout-container">
      <div id="site-container">
        <header id="fixed-header">
          <SiteHeader locale={locale} />
        </header>
        <div id="site-body">
          <div id="profile-container" className={blogView ? "blog-view" : ""}>
            <SiteProfile locale={locale} />
          </div>
          <div id="site-page" className={blogView ? "blog-view" : ""}>
            <main id="site-content">
              {titleHeader ? (
                <h1 id="page-header">{titleHeader}</h1>
              ) : (
                titleCode && <h1 id="page-header">{t(titleCode, locale)}</h1>
              )}
              {descriptionCode && <div id="page-description">{t(descriptionCode, locale)}</div>}
              {children}
            </main>
            <footer>
              <span>
                © 2025, {t("DEVELOPED.WITH", locale)} <a href="https://nuxt.com/">Nuxt</a>. {t("ICONS.BY", locale)} :{" "}
                <a href="https://icons8.com/">Icons8</a>.
              </span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
