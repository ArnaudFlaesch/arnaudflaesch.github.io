import React from "react";
import { DEFAULT_LOCALE, fullName, jobName } from "~/data/SiteData";
import { t } from "~/utils/i18n";

export default function NotFoundPage({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const titleCode = "404.NOT.FOUND";
  const descriptionCode = "PAGE.NOT.FOUND.MESSAGE";
  const pageTitle = `${t(titleCode, locale)} | ${fullName} - ${t(jobName, locale)}`;

  return (
    <>
      <title>{pageTitle}</title>
      <h1 id="page-header">{t(titleCode, locale)}</h1>
      <div id="page-description">{t(descriptionCode, locale)}</div>
      <div />
    </>
  );
}
