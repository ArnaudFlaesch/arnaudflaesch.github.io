import './Profile.scss';

import { LocationOn, Work } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar/Avatar';
import { Link, graphql, useStaticQuery } from 'gatsby';
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
      <Link to="/">
        <Avatar id="bio-avatar" alt={author} sx={{ width: 100, height: 100 }} src="/profile-picture.jpg" />
      </Link>
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
        <div id="linkedinLink">
          <a href={linkedinLink} className="social-link">
            <Tooltip title="LinkedIn">
              <div>
                <StaticImage src="../../images/icons/linkedin-icon.png" alt="linkedin" />
              </div>
            </Tooltip>
            <span>{linkedinLink}</span>
          </a>
        </div>

        <div id="githubLink">
          <a href={githubLink} className="social-link">
            <Tooltip title="Github">
              <div>
                <StaticImage src="../../images/icons/github-icon.png" alt="github" />
              </div>
            </Tooltip>
            <span>{githubLink}</span>
          </a>
        </div>

        <div id="scrumOrgLink">
          <a href={scrumOrgLink} className="social-link">
            <Tooltip title="Profil Scrum.org">
              <div>
                <StaticImage src="../../images/icons/scrum-org-icon.png" alt="scrum.org" />
              </div>
            </Tooltip>
            <span>{scrumOrgLink}</span>
          </a>
        </div>

        {/*
        <div id="welovedevsLink">
          <a href={welovedevsLink} className="social-link">
            <Tooltip title="Profil WeLoveDevs">
              <div>
                <StaticImage src="../../images/icons/welovedevs-icon.jpg" alt="welovedevs" />
              </div>
            </Tooltip>
            <span>{welovedevsLink}</span>
          </a>
        </div>
  */}
      </div>
    </div>
  );
}
