import React from "react";
import CvPage from "~/components/CvPage";
import { buildMetadata } from "~/utils/seo";

export const metadata = buildMetadata({
  titleCode: "CV.PAGE.TITLE",
  descriptionCode: "CV.PAGE.DESCRIPTION",
  path: "/en/cv",
  locale: "en"
});

export default function Page() {
  return <CvPage locale="en" />;
}
