import { Script } from 'gatsby';
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
          className="ml-5"
          height={IMG_HEIGHT}
          width={IMG_WIDTH}
          src="../../images/icons/linkedin-icon.png"
          alt="linkedin"
        />
      </a>

      <div
        className="badge-base LI-profile-badge"
        data-locale="fr_FR"
        data-size="medium"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity="arnaudflaesch"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://fr.linkedin.com/in/arnaudflaesch?trk=profile-badge"
        >
          Arnaud Flaesch
        </a>
      </div>

      <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" />
    </div>
  );
}
