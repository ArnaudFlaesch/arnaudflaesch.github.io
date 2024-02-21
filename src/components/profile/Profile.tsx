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
            medium
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
  const mediumLink = socials.medium;
  // const welovedevsLink = socials.weLoveDevs;

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
                <StaticImage src="../../images/icons/socials/linkedin-icon.png" alt="linkedin" />
              </div>
            </Tooltip>
            <span>Profil LinkedIn</span>
          </a>
        </div>

        <div id="githubLink">
          <a href={githubLink} className="social-link">
            <Tooltip title="Github">
              <div>
                <StaticImage src="../../images/icons/socials/github-icon.png" alt="github" />
              </div>
            </Tooltip>
            <span>Profil GitHub</span>
          </a>
        </div>

        <div id="scrumOrgLink">
          <a href={scrumOrgLink} className="social-link">
            <Tooltip title="Certifications Scrum.org">
              <div>
                <StaticImage src="../../images/icons/socials/scrum-org-icon.png" alt="scrum.org" />
              </div>
            </Tooltip>
            <span>Certifications Scrum.org</span>
          </a>
        </div>

        <div id="mediumLink">
          <a href={mediumLink} className="social-link">
            <Tooltip title="Medium">
              <div>
                <StaticImage src="../../images/icons/socials/medium-icon.png" alt="medium" />
              </div>
            </Tooltip>
            <span>Profil Medium</span>
          </a>
        </div>

        {/*
        <div id="welovedevsLink">
          <a href={welovedevsLink} className="social-link">
            <Tooltip title="Profil WeLoveDevs">
              <div>
                <StaticImage src="../../images/socials/icons/welovedevs-icon.jpg" alt="welovedevs" />
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
