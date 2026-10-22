import Tooltip from "@mui/material/Tooltip";
import { profileSocialLinks } from "~/data/ProfileSocialsData";
import { defaultImageUrl, fullName, type Locale } from "~/data/SiteData";
import { t } from "~/utils/i18n";

const BIO_SOCIAL_LINKS = profileSocialLinks.filter(({ name }) => name === "LinkedIn" || name === "GitHub");

export default function Bio({ locale }: { locale: Locale }) {
  return (
    <div className="author-bio">
      <img className="bio-avatar" width={100} height={100} src={defaultImageUrl} alt={fullName} />
      <span>
        {t("WRITTEN.BY", locale)} <strong>{fullName}</strong>
      </span>
      <div className="author-socials">
        {BIO_SOCIAL_LINKS.map(({ name, link, imgPath }) => (
          <a key={name} href={link} target="_blank" rel="noopener noreferrer">
            <Tooltip title={name}>
              <img src={imgPath} alt={name.toLowerCase()} width={40} height={40} />
            </Tooltip>
          </a>
        ))}
      </div>
    </div>
  );
}
