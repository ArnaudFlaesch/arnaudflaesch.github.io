"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import SiteFooter from "~/components/SiteFooter";
import SiteHeader from "~/components/SiteHeader";
import SiteProfile from "~/components/SiteProfile";
import { parsePath } from "~/utils/i18n";
import { useStaleMetadataCleanup } from "~/utils/useStaleMetadataCleanup";

export default function SiteLayout({ children }: { children: ReactNode }) {
  useStaleMetadataCleanup();
  const pathname = usePathname();
  const { locale, segments } = parsePath(pathname);
  const isBlogPost = segments[0] === "blog" && segments.length > 1;

  return (
    <div id="site-container">
      <header id="fixed-header">
        <SiteHeader locale={locale} pathname={pathname} />
      </header>
      <div id="site-body" className={isBlogPost ? "blog-view" : undefined}>
        <div id="profile-container">
          <SiteProfile locale={locale} />
        </div>
        <div id="site-page">
          <main id="site-content">{children}</main>
          <SiteFooter locale={locale} />
        </div>
      </div>
    </div>
  );
}
