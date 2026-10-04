"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";
import "./SiteFooter.scss";

export default function SiteFooter({ locale }: { locale?: string } = {}) {
  const pathname = usePathname() || "/";
  const isEn = locale ? locale === "en" : pathname.startsWith("/en");
  const currentLocale = isEn ? "en" : DEFAULT_LOCALE;

  return (
    <footer>
      <span>
        © 2026, {t("DEVELOPED.WITH", currentLocale)} <a href="https://nextjs.org/">Next.js</a>.{" "}
        {t("ICONS.BY", currentLocale)} : <a href="https://icons8.com/">Icons8</a>.
      </span>
    </footer>
  );
}
