import './Profile.scss';

import { LocationOn, Person, Work } from '@mui/icons-material';
import { Tooltip, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar/Avatar';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Profile(): React.ReactElement {
  const IMG_HEIGHT = 34;
  const IMG_WIDTH = 34;

  return (
    <div id="profile">
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
        <div id="social-links">
          <Tooltip title="GitHub" className="social-link">
            <IconButton href="https://github.com/ArnaudFlaesch">
              <StaticImage
                height={IMG_HEIGHT}
                width={IMG_WIDTH}
                src="../../images/icons/github-icon.png"
                alt="github"
              />
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
      </div>
    </div>
  );
}
