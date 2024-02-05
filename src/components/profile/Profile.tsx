import './Profile.scss';

import { LocationOn, Work } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
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
          socials {
            linkedin
            github
            scrumOrg
            weLoveDevs
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata.author;
  const job = data.site.siteMetadata.job;
  const company = data.site.siteMetadata.company;

  const socials = data.site.siteMetadata.socials;
  const linkedinLink = socials.linkedin;
  const githubLink = socials.github;
  const scrumOrgLink = socials.scrumOrg;
  const welovedevsLink = socials.weLoveDevs;

  return (
    <div id="profile">
      <Avatar id="bio-avatar" alt={author} sx={{ width: 100, height: 100 }} src="/profile-picture.jpg" />
      <div id="bio">
        <div id="work">
          <Work />
          {job} <br /> chez {company}
        </div>
        <div id="location">
          <LocationOn />
          Paris
        </div>
      </div>
      <div id="social-links">
        <div id="linkedinLink" className="social-link">
          <a href={linkedinLink}>
            <Tooltip title="LinkedIn">
              <StaticImage src="../../images/icons/linkedin-icon.png" alt="linkedin" />
            </Tooltip>
            <span>{linkedinLink}</span>
          </a>
        </div>

        <div id="githubLink" className="social-link">
          <Tooltip title="Github">
            <div>
              <StaticImage src="../../images/icons/github-icon.png" alt="github" />
            </div>
          </Tooltip>
          <a href={githubLink}>{githubLink}</a>
        </div>

        <div id="scrumOrgLink" className="social-link">
          <Tooltip title="Profil Scrum.org">
            <div>
              <StaticImage src="../../images/icons/scrum-org-icon.png" alt="scrum.org" />
            </div>
          </Tooltip>
          <a href={scrumOrgLink}>{scrumOrgLink}</a>
        </div>

        <div id="welovedevsLink" className="social-link">
          <Tooltip title="Profil WeLoveDevs">
            <div>
              <StaticImage src="../../images/icons/welovedevs-icon.jpg" alt="welovedevs" />
            </div>
          </Tooltip>
          <a href={welovedevsLink}>{welovedevsLink}</a>
        </div>
      </div>
    </div>
  );
}
