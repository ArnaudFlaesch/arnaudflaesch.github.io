import React from "react";
import CvContent from "~/components/CvContent/CvContent";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";

export default function CvPage({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  return (
    <>
      <h1 id="page-header">{t("CV.PAGE.TITLE", locale)}</h1>
      <div id="page-description">{t("CV.PAGE.DESCRIPTION", locale)}</div>
      <CvContent locale={locale} />
    </>
  );
}
