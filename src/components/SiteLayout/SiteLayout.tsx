"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import SiteHeader from "~/components/SiteHeader/SiteHeader";
import SiteProfile from "~/components/SiteProfile/SiteProfile";
import SiteFooter from "~/components/SiteFooter/SiteFooter";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import "./SiteLayout.scss";

interface SiteLayoutProps {
  children: ReactNode;
  locale?: string;
}

export default function SiteLayout({ children, locale }: SiteLayoutProps) {
  const pathname = usePathname() || "/";
  const isEn = locale ? locale === "en" : pathname.startsWith("/en");
  const currentLocale = isEn ? "en" : DEFAULT_LOCALE;

  const segments = pathname.split("/").filter(Boolean);
  const isBlogView =
    (segments[0] === "blog" && segments.length > 1) ||
    (segments[0] === "en" && segments[1] === "blog" && segments.length > 2);

  return (
    <div className="layout-container">
      <div id="site-container">
        <header id="fixed-header">
          <SiteHeader locale={currentLocale} />
        </header>
        <div id="site-body">
          <div id="profile-container" className={isBlogView ? "blog-view" : ""}>
            <SiteProfile locale={currentLocale} />
          </div>
          <div id="site-page" className={isBlogView ? "blog-view" : ""}>
            <main id="site-content">{children}</main>
            <SiteFooter locale={currentLocale} />
          </div>
        </div>
      </div>
    </div>
  );
}
