import React from "react";
import Link from "next/link";
import TooltipIcon from "~/components/TooltipIcon";
import MdiIcon, { icons } from "~/components/icons/MdiIcon";
import { fullName, jobName, company, city, DEFAULT_LOCALE } from "~/data/SiteData";
import { profileSocialLinks } from "~/data/ProfileSocialsData";
import { t, getLocalePath } from "~/utils/i18n";
import "./SiteProfile.scss";

const IMAGE_HEIGHT = 35;
const IMAGE_WIDTH = 35;

export default function SiteProfile({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const author = fullName;

  return (
    <div id="profile-bio">
      <Link id="avatar-link" href={getLocalePath("/", locale)}>
        <img id="bio-avatar" src="/profile-picture.jpg" alt={author} width={105} height={100} />
      </Link>
      <div id="profile">
        <div id="bio">
          <div id="work">
            <MdiIcon path={icons.briefcase} />
            <span>
              {t(jobName, locale)}
              <br />
              {t("AT", locale)}
              {company}
            </span>
          </div>
          <div id="location">
            <MdiIcon path={icons.mapMarker} />
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
              <TooltipIcon
                tooltip={socialLink.name}
                iconWidth={IMAGE_WIDTH}
                iconHeight={IMAGE_HEIGHT}
                iconPath={socialLink.imgPath}
                alt={socialLink.name.toLowerCase()}
              />
              <span>{t(socialLink.labelI18nCode, locale)}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
