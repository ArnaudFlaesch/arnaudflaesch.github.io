"use client";

import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import X from "@mui/icons-material/X";
import type { Locale } from "~/data/SiteData";
import { t } from "~/utils/i18n";

const SHARE_TARGETS = [
  { name: "Facebook", shareUrl: "https://www.facebook.com/sharer.php?u=", Icon: Facebook },
  { name: "X", shareUrl: "https://twitter.com/share?url=", Icon: X },
  { name: "LinkedIn", shareUrl: "https://www.linkedin.com/shareArticle?url=", Icon: LinkedIn }
];

export default function ShareButtons({ url, locale }: { url: string; locale: Locale }) {
  return (
    <div id="share-buttons">
      {SHARE_TARGETS.map(({ name, shareUrl, Icon }) => {
        const href = `${shareUrl}${encodeURIComponent(url)}`;
        return (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={`${t("SHARE.ON", locale)} ${name}`}
            onClick={(event) => {
              event.preventDefault();
              window.open(href, "", "popup,width=700,height=400");
            }}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
