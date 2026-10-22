import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import LocationOn from "@mui/icons-material/LocationOn";
import Work from "@mui/icons-material/Work";
import { profileSocialLinks } from "~/data/ProfileSocialsData";
import { city, company, fullName, jobName, type Locale } from "~/data/SiteData";
import { getLocalePath, t } from "~/utils/i18n";

export default function SiteProfile({ locale }: { locale: Locale }) {
  return (
    <div id="profile-bio">
      <Link id="avatar-link" href={getLocalePath("/", locale)}>
        <img id="bio-avatar" src="/profile-picture.jpg" alt={fullName} width={105} height={100} />
      </Link>
      <div id="profile">
        <div id="profile-info">
          <div>
            <Work className="profile-icon" />
            <span>
              {t(jobName, locale)}
              <br />
              {t("AT", locale)}
              {company}
            </span>
          </div>
          <div>
            <LocationOn className="profile-icon" />
            <span>{city}</span>
          </div>
        </div>
        <div id="social-links">
          {profileSocialLinks.map(({ name, link, imgPath, labelI18nCode }) => (
            <a key={name} href={link} target="_blank" rel="noopener noreferrer" className="social-link">
              <Tooltip title={name}>
                <img src={imgPath} width={35} height={35} alt={name.toLowerCase()} />
              </Tooltip>
              <span>{t(labelI18nCode, locale)}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
