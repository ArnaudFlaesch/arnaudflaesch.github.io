import React from "react";
import DefaultLayout from "~/components/DefaultLayout";
import CvContent from "~/components/CvContent";
import { DEFAULT_LOCALE } from "~/data/SiteData";

export default function CvPage({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const titleCode = "CV.PAGE.TITLE";
  const descriptionCode = "CV.PAGE.DESCRIPTION";

  return (
    <div className="layout-container">
      <DefaultLayout titleCode={titleCode} descriptionCode={descriptionCode} locale={locale}>
        <CvContent locale={locale} />
      </DefaultLayout>
    </div>
  );
}
