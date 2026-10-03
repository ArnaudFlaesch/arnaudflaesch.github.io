import React from "react";
import DefaultLayout from "~/components/DefaultLayout";
import CvContent from "~/components/CvContent";
import { buildMetadata } from "~/utils/seo";

export const metadata = buildMetadata({
  titleCode: "CV.PAGE.TITLE",
  descriptionCode: "CV.PAGE.DESCRIPTION",
  path: "/cv",
  locale: "fr"
});

export default function CvPage() {
  const locale = "fr";
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
