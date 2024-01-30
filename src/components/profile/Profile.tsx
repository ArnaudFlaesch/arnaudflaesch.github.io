import './Profile.scss';

import { LocationOn, Person, Work } from '@mui/icons-material';
import { Icon, Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar/Avatar';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Profile(): React.ReactElement {
  const data = useStaticQuery(graphql`
    query ProfileQuery {
      site {
        siteMetadata {
          author
          job
          company
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;
  const job = data.site.siteMetadata?.job;
  const company = data.site.siteMetadata?.company;

  const IMG_HEIGHT = 34;
  const IMG_WIDTH = 34;

  const linkedinLink = 'https://www.linkedin.com/in/arnaudflaesch/';
  const githubLink = 'https://github.com/ArnaudFlaesch';
  const scrumOrgLink = 'https://www.scrum.org/user/1355891';
  const welovedevsLink = 'https://arnaud-flaesch.welovedevs.com/';

  return (
    <>
      {author && job && (
        <div id="profile">
          <Avatar id="bio-avatar" alt={author} sx={{ width: 100, height: 100 }} src="/profile-picture.jpg" />

          <div id="bio">
            <div>
              <Person />
              {author}
            </div>
            <div>
              {' '}
              <Work />
              {job} <br /> chez {company}
            </div>
            <div>
              <LocationOn />
              Paris
            </div>
          </div>
        </div>
      )}

      <div id="social-links">
        <div id="linkedinLink" className="social-link">
          <Tooltip title="LinkedIn">
            <Icon>
              <StaticImage
                height={IMG_HEIGHT}
                width={IMG_WIDTH}
                src="../../images/icons/linkedin-icon.png"
                alt="linkedin"
              />
            </Icon>
          </Tooltip>
          <a href={linkedinLink}>{linkedinLink}</a>
        </div>

        <div id="githubLink" className="social-link">
          <Tooltip title="Github">
            <Icon>
              <StaticImage
                height={IMG_HEIGHT}
                width={IMG_WIDTH}
                src="../../images/icons/github-icon.png"
                alt="github"
              />
            </Icon>
          </Tooltip>
          <a href={githubLink}>{githubLink}</a>
        </div>

        <div id="scrumOrgLink" className="social-link">
          <Tooltip title="Profil Scrum.org">
            <Icon>
              <StaticImage
                height={IMG_HEIGHT}
                width={IMG_WIDTH}
                src="../../images/icons/scrum-org-icon.png"
                alt="scrum.org"
              />
            </Icon>
          </Tooltip>
          <a href={scrumOrgLink}>{scrumOrgLink}</a>
        </div>

        <div id="welovedevsLink" className="social-link">
          <Tooltip title="Profil WeLoveDevs">
            <Icon>
              <StaticImage
                height={IMG_HEIGHT}
                width={IMG_WIDTH}
                src="../../images/icons/welovedevs-icon.jpg"
                alt="welovedevs"
              />
            </Icon>
          </Tooltip>
          <a href={welovedevsLink}>{welovedevsLink}</a>
        </div>
      </div>
    </>
  );
}
