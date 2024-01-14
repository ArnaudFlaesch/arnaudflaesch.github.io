import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import SocialLinks from '../social-links/SocialLinks';

import './Profile.scss';

export default function Profile(): React.ReactElement {
  return (
    <div id="profile-container">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        src="../../images/profile-picture.jpg"
        width={100}
        height={100}
        quality={95}
        alt="Profile picture"
      />

      <div>
        <p>
          Arnaud Flaesch <br />
          Développeur Web
          <br />
          Paris
        </p>
      </div>
      <SocialLinks />
    </div>
  );
}
