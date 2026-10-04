import React from "react";
import DefaultLayout from "~/components/DefaultLayout";
import { DEFAULT_LOCALE, fullName, jobName } from "~/data/SiteData";
import { t } from "~/utils/i18n";

export default function NotFoundPage({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const titleCode = "404.NOT.FOUND";
  const descriptionCode = "PAGE.NOT.FOUND.MESSAGE";
  const pageTitle = `${t(titleCode, locale)} | ${fullName} - ${t(jobName, locale)}`;

  return (
    <>
      <title>{pageTitle}</title>
      <DefaultLayout titleCode={titleCode} descriptionCode={descriptionCode} locale={locale}>
        <div />
      </DefaultLayout>
    </>
  );
}
