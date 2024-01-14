import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import './SocialLinks.scss';

export default function SocialLinks(): React.ReactElement {
  const IMG_HEIGHT = 34;
  const IMG_WIDTH = 34;
  return (
    <div id="social-links">
      <a href="https://github.com/ArnaudFlaesch">
        <StaticImage height={IMG_HEIGHT} width={IMG_WIDTH} src="../../images/icons/github-icon.png" alt="github" />
      </a>

      <a href="https://www.linkedin.com/in/arnaudflaesch/" className="social-link">
        <StaticImage height={IMG_HEIGHT} width={IMG_WIDTH} src="../../images/icons/linkedin-icon.png" alt="linkedin" />
      </a>
      <a href="https://arnaud-flaesch.welovedevs.com/" className="social-link">
        <StaticImage
          height={IMG_HEIGHT}
          width={IMG_WIDTH}
          src="../../images/icons/welovedevs-icon.jpg"
          alt="welovedevs"
        />
      </a>
      <a href="https://www.scrum.org/user/1355891" className="social-link">
        <StaticImage
          height={IMG_HEIGHT}
          width={IMG_WIDTH}
          src="../../images/icons/scrum-org-icon.png"
          alt="scrum.org"
        />
      </a>
    </div>
  );
}
