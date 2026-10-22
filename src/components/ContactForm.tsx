"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "~/data/SiteData";
import { t } from "~/utils/i18n";

const FORMSPREE_URL = "https://formspree.io/f/mkndgrkd";
const SENT_MESSAGE_DURATION_MS = 5000;

// Field validation relies on the browser's native constraints (required, type="email").
export default function ContactForm({ locale }: { locale: Locale }) {
  const [isSending, setIsSending] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSending(true);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      if (response.ok) {
        form.reset();
        setIsMailSent(true);
        setTimeout(() => setIsMailSent(false), SENT_MESSAGE_DURATION_MS);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      {isMailSent && <p role="status">{t("EMAIL.SENT", locale)}</p>}

      <form id="contact-form" onSubmit={handleSubmit}>
        <div id="contact-informations">
          <div className="form-field">
            <label htmlFor="name">{t("NAME.FIRSTNAME", locale)}</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">{t("YOUR.EMAIL.ADDRESS", locale)}</label>
            <input id="email" name="email" type="email" required />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="message">{t("MESSAGE", locale)}</label>
          <textarea id="message" name="message" rows={10} required />
        </div>

        <button id="submit-button" type="submit" disabled={isSending}>
          {t("SEND", locale)}
        </button>
      </form>
    </>
  );
}
