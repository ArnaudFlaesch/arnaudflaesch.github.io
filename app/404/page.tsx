import React from "react";
import DefaultLayout from "~/components/DefaultLayout";
import { buildMetadata } from "~/utils/seo";
import { t } from "~/utils/i18n";
import { fullName, jobName } from "~/data/SiteData";

export const metadata = buildMetadata({
  titleCode: "404.NOT.FOUND",
  descriptionCode: "PAGE.NOT.FOUND.MESSAGE",
  path: "/404",
  locale: "fr"
});

export default function NotFoundPage() {
  const locale = "fr";
  const titleCode = "404.NOT.FOUND";
  const descriptionCode = "PAGE.NOT.FOUND.MESSAGE";
  const pageTitle = `${t(titleCode, locale)} | ${fullName} - ${t(jobName, locale)}`;

  return (
    <div className="layout-container">
      <title>{pageTitle}</title>
      <DefaultLayout titleCode={titleCode} descriptionCode={descriptionCode} locale={locale}>
        <div />
      </DefaultLayout>
    </div>
  );
}
