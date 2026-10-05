"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Tooltip from "@mui/material/Tooltip";
import Work from "@mui/icons-material/Work";
import LocationOn from "@mui/icons-material/LocationOn";
import { fullName, jobName, company, city, DEFAULT_LOCALE } from "~/data/SiteData";
import { profileSocialLinks } from "~/data/ProfileSocialsData";
import { t, getLocalePath } from "~/utils/i18n";
import "./SiteProfile.scss";

const IMAGE_HEIGHT = 35;
const IMAGE_WIDTH = 35;

export default function SiteProfile({ locale }: { locale?: string } = {}) {
  const pathname = usePathname() || "/";
  const isEn = locale ? locale === "en" : pathname.startsWith("/en");
  const currentLocale = isEn ? "en" : DEFAULT_LOCALE;

  return (
    <div id="profile-bio">
      <Link id="avatar-link" href={getLocalePath("/", currentLocale)}>
        <img id="bio-avatar" src="/profile-picture.jpg" alt={fullName} width={105} height={100} />
      </Link>
      <div id="profile">
        <div id="bio">
          <div id="work">
            <Work className="v-icon" />
            <span>
              {t(jobName, currentLocale)}
              <br />
              {t("AT", currentLocale)}
              {company}
            </span>
          </div>
          <div id="location">
            <LocationOn className="v-icon" />
            <span>{city}</span>
          </div>
        </div>
        <div id="social-links">
          {profileSocialLinks.map((socialLink) => (
            <a
              key={socialLink.name}
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Tooltip title={socialLink.name}>
                <img
                  src={socialLink.imgPath}
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                  alt={socialLink.name.toLowerCase()}
                />
              </Tooltip>
              <span>{t(socialLink.labelI18nCode, currentLocale)}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
