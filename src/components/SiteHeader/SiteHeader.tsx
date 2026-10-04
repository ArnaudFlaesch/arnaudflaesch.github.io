"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BookOutlined from "@mui/icons-material/BookOutlined";
import HomeTwoTone from "@mui/icons-material/HomeTwoTone";
import Code from "@mui/icons-material/Code";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import WorkTwoTone from "@mui/icons-material/WorkTwoTone";
import { DEFAULT_LOCALE, fullName } from "~/data/SiteData";
import { t, getLocalePath } from "~/utils/i18n";
import "./SiteHeader.scss";

export default function SiteHeader({ locale }: { locale?: string } = {}) {
  const pathname = usePathname() || "/";
  const router = useRouter();

  const isEn = locale ? locale === "en" : pathname.startsWith("/en");
  const currentLocale = isEn ? "en" : "fr";

  const urls = [
    {
      path: "/",
      label: "HOME.LABEL",
      icon: <HomeTwoTone />
    },
    {
      path: "/cv",
      label: "RESUME.LABEL",
      icon: <WorkTwoTone />
    },
    {
      path: "/blog",
      label: "BLOG.LABEL",
      icon: <BookOutlined />
    },
    {
      path: "/projets",
      label: "PROJECTS.LABEL",
      icon: <Code />
    },
    {
      path: "/contact",
      label: "CONTACT.LABEL",
      icon: <EmailOutlined />
    }
  ];

  const handleSwitchLanguage = () => {
    if (currentLocale === "fr") {
      // switch to en
      if (pathname === "/") {
        router.push("/en");
      } else {
        router.push(`/en${pathname}`);
      }
    } else {
      // switch to fr
      const stripped = pathname.replace(/^\/en/, "");
      router.push(stripped === "" ? "/" : stripped);
    }
  };

  const isActive = (targetPath: string) => {
    const rawPath = pathname.replace(/^\/en/, "") || "/";
    const cleanTarget = targetPath.replace(/\/+$/, "") || "/";
    const cleanCurrent = rawPath.replace(/\/+$/, "") || "/";
    if (cleanTarget === "/") {
      return cleanCurrent === "/";
    }
    return cleanCurrent === cleanTarget || cleanCurrent.startsWith(`${cleanTarget}/`);
  };

  return (
    <span id="portfolio-header">
      <h1>
        <Link href={getLocalePath("/", currentLocale)}>{fullName}</Link>
      </h1>
      <div id="right-navbar">
        <div id="url-list">
          {urls.map((url) => {
            const active = isActive(url.path);
            return (
              <Link key={url.path} className={active ? "active" : ""} href={getLocalePath(url.path, currentLocale)}>
                {url.icon}
                {t(url.label, currentLocale)}
              </Link>
            );
          })}
        </div>

        <div id="switch-language">
          {currentLocale === DEFAULT_LOCALE ? (
            <button onClick={handleSwitchLanguage} type="button">
              <img height={30} alt="us flag" src="/icons/languages/us-flag.png" />
            </button>
          ) : (
            <button onClick={handleSwitchLanguage} type="button">
              <img height={30} alt="french flag" src="/icons/languages/french-flag.png" />
            </button>
          )}
        </div>
      </div>
    </span>
  );
}
