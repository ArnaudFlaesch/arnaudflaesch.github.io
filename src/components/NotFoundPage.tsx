import React from "react";
import Seo from "~/components/Seo";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";

export default function NotFoundPage({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const titleCode = "404.NOT.FOUND";
  const descriptionCode = "PAGE.NOT.FOUND.MESSAGE";

  return (
    <>
      <Seo titleCode={titleCode} descriptionCode={descriptionCode} path="/404" locale={locale} />
      <h1 id="page-header">{t(titleCode, locale)}</h1>
      <div id="page-description">{t(descriptionCode, locale)}</div>
      <div />
    </>
  );
}
