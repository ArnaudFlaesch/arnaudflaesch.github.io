import React from "react";
import DefaultLayout from "~/components/DefaultLayout";
import ContactForm from "~/components/ContactForm";
import { DEFAULT_LOCALE } from "~/data/SiteData";

export default function ContactPage({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const titleCode = "CONTACT.PAGE.TITLE";
  const descriptionCode = "CONTACT.PAGE.DESCRIPTION";

  return (
    <DefaultLayout titleCode={titleCode} descriptionCode={descriptionCode} locale={locale}>
      <ContactForm locale={locale} />
    </DefaultLayout>
  );
}
