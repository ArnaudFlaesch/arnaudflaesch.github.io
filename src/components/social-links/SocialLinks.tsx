import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function SocialLinks(): React.ReactElement {
  const IMG_HEIGHT = 34;
  const IMG_WIDTH = 34;
  return (
    <div>
      <a href="https://github.com/ArnaudFlaesch">
        <StaticImage height={IMG_HEIGHT} width={IMG_WIDTH} src="../../images/icons/github-icon.png" alt="github" />
      </a>

      <a href="https://www.linkedin.com/in/arnaudflaesch/">
        <StaticImage
          className="mx-5"
          height={IMG_HEIGHT}
          width={IMG_WIDTH}
          src="../../images/icons/linkedin-icon.png"
          alt="linkedin"
        />
      </a>

      <a href="https://www.malt.fr/profile/arnaudflaesch">
        <StaticImage height={IMG_HEIGHT} width={IMG_WIDTH} src="../../images/icons/malt-icon.png" alt="malt" />
      </a>
    </div>
  );
}
