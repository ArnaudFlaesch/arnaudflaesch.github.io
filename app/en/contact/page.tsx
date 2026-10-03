import React from "react";
import DefaultLayout from "~/components/DefaultLayout";
import ContactForm from "~/components/ContactForm";
import { buildMetadata } from "~/utils/seo";

export const metadata = buildMetadata({
  titleCode: "CONTACT.PAGE.TITLE",
  descriptionCode: "CONTACT.PAGE.DESCRIPTION",
  path: "/en/contact",
  locale: "en"
});

export default function ContactPageEN() {
  const locale = "en";
  const titleCode = "CONTACT.PAGE.TITLE";
  const descriptionCode = "CONTACT.PAGE.DESCRIPTION";

  return (
    <div className="layout-container">
      <DefaultLayout titleCode={titleCode} descriptionCode={descriptionCode} locale={locale}>
        <ContactForm locale={locale} />
      </DefaultLayout>
    </div>
  );
}
