import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import './SocialLinks.scss';
import { IconButton, Tooltip } from '@mui/material';

export default function SocialLinks(): React.ReactElement {
  const IMG_HEIGHT = 34;
  const IMG_WIDTH = 34;
  return (
    <div id="social-links">
      <Tooltip title="GitHub" className="social-link">
        <IconButton href="https://github.com/ArnaudFlaesch">
          <StaticImage height={IMG_HEIGHT} width={IMG_WIDTH} src="../../images/icons/github-icon.png" alt="github" />
        </IconButton>
      </Tooltip>

      <Tooltip title="LinkedIn" className="social-link">
        <IconButton href="https://www.linkedin.com/in/arnaudflaesch/">
          <StaticImage
            height={IMG_HEIGHT}
            width={IMG_WIDTH}
            src="../../images/icons/linkedin-icon.png"
            alt="linkedin"
          />
        </IconButton>
      </Tooltip>

      <Tooltip title="Profil Scrum.org" className="social-link">
        <IconButton href="https://www.scrum.org/user/1355891">
          <StaticImage
            height={IMG_HEIGHT}
            width={IMG_WIDTH}
            src="../../images/icons/scrum-org-icon.png"
            alt="scrum-org"
          />
        </IconButton>
      </Tooltip>

      <Tooltip title="Profil WeLoveDevs" className="social-link">
        <IconButton href="https://arnaud-flaesch.welovedevs.com/">
          <StaticImage
            height={IMG_HEIGHT}
            width={IMG_WIDTH}
            src="../../images/icons/welovedevs-icon.jpg"
            alt="welovedevs"
          />
        </IconButton>
      </Tooltip>
    </div>
  );
}
