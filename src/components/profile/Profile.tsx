import React from 'react';
import SocialLinks from '../social-links/SocialLinks';

import './Profile.scss';
import Avatar from '@mui/material/Avatar/Avatar';

export default function Profile(): React.ReactElement {
  return (
    <div id="profile-container">
      <Avatar className="bio-avatar" alt="Arnaud Flaesch" sx={{ width: 100, height: 100 }} src="/profile-picture.jpg" />

      <div id="short-presentation">
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
