import './Profile.scss';

import { LocationOn, Work } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar/Avatar';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';

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
            credly
            medium
            stackOverflow
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
  const credlyLink = socials.credly;
  const mediumLink = socials.medium;
  const stackOverflowLink = socials.stackOverflow;
  // const welovedevsLink = socials.weLoveDevs;

  const {t} = useTranslation()

  return (
    <div id="profile">
      <Link to="/">
        <Avatar id="bio-avatar" alt={author} sx={{ width: 100, height: 100 }} src="/profile-picture.jpg" />
      </Link>
      <div id="bio">
        <div id="work">
          <Work />
          {t(job)} <br /> {t("AT")} {company}
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
            <span>{t("LINKEDIN.PROFILE")}</span>
          </a>
        </div>

        <div id="githubLink">
          <a href={githubLink} className="social-link">
            <Tooltip title="Github">
              <div>
                <StaticImage src="../../images/icons/socials/github-icon.png" alt="github" />
              </div>
            </Tooltip>
            <span>{t("GITHUB.PROFILE")}</span>
          </a>
        </div>

        <div id="scrumOrgLink">
          <a href={scrumOrgLink} className="social-link">
            <Tooltip title="Scrum.org">
              <div>
                <StaticImage src="../../images/icons/socials/scrum-org-icon.png" alt="scrum.org" />
              </div>
            </Tooltip>
            <span>{t("SCRUM.ORG.PROFILE")}</span>
          </a>
        </div>

        <div id="credlyLink">
          <a href={credlyLink} className="social-link">
            <Tooltip title="Certifications">
              <div>
                <StaticImage src="../../images/icons/socials/credly-icon.png" alt="credly" />
              </div>
            </Tooltip>
            <span>{t("CERTIFICATIONS")}</span>
          </a>
        </div>

        <div id="mediumLink">
          <a href={mediumLink} className="social-link">
            <Tooltip title="Medium">
              <div>
                <StaticImage src="../../images/icons/socials/medium-icon.png" alt="medium" />
              </div>
            </Tooltip>
            <span>{t("MEDIUM.PROFILE")}</span>
          </a>
        </div>

        <div id="stackoverflowLink">
          <a href={stackOverflowLink} className="social-link">
            <Tooltip title="Stack Overflow">
              <div>
                <StaticImage src="../../images/icons/socials/stackoverflow-icon.png" alt="stackoverflow" />
              </div>
            </Tooltip>
            <span>{t("STACK.OVERFLOW.PROFILE")}</span>
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
