import React from 'react';
import SocialLinks from '../social-links/SocialLinks';

import './Profile.scss';
import Avatar from '@mui/material/Avatar/Avatar';
import { LocationOn, Person, Work } from '@mui/icons-material';

export default function Profile(): React.ReactElement {
  return (
    <div id="profile-container">
      <Avatar id="bio-avatar" alt="Arnaud Flaesch" sx={{ width: 100, height: 100 }} src="/profile-picture.jpg" />

      <div id="bio">
        <div>
          <Person />
          Arnaud Flaesch
        </div>
        <div>
          {' '}
          <Work />
          Développeur Web
        </div>
        <div>
          <LocationOn />
          Paris
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}
