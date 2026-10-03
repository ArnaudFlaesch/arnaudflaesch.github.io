"use client";

import React, { useState } from "react";
import { DEFAULT_LOCALE } from "~/data/SiteData";
import { t } from "~/utils/i18n";

export default function ContactForm({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMailSent, setIsMailSent] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = name.trim().length >= 1 && emailRegex.test(email.trim()) && message.trim().length >= 1;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("message", message);

    fetch("https://formspree.io/f/mkndgrkd", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    })
      .then((response) => {
        if (response.ok) {
          setIsMailSent(true);
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setIsMailSent(false);
          }, 5000);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {isMailSent && (
        <div>
          <p>{t("EMAIL.SENT", locale)}</p>
        </div>
      )}

      <form id="contact-form" onSubmit={handleSubmit}>
        <div id="contact-informations">
          <div className="form-field">
            <label htmlFor="name" style={{ display: "block", marginBottom: "0.25rem" }}>
              {t("NAME.FIRSTNAME", locale)}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>

          <div className="form-field">
            <label htmlFor="email" style={{ display: "block", marginBottom: "0.25rem" }}>
              {t("YOUR.EMAIL.ADDRESS", locale)}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="message" style={{ display: "block", marginBottom: "0.25rem" }}>
            {t("MESSAGE", locale)}
          </label>
          <textarea
            id="message"
            name="message"
            rows={10}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <button
          id="submit-button"
          type="submit"
          disabled={!isValid}
          style={{
            padding: "0.5rem 1.5rem",
            cursor: isValid ? "pointer" : "not-allowed",
            backgroundColor: isValid ? "#005b99" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "4px"
          }}
        >
          {t("SEND", locale)}
        </button>
      </form>
    </>
  );
}
