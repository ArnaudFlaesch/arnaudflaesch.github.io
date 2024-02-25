import Avatar from '@mui/material/Avatar/Avatar';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import './Bio.scss';

export default function Bio(): React.ReactElement {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          job
          socials {
            linkedin
            github
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata.author;
  const socials = data.site.siteMetadata.socials;
  const linkedinLink = socials.linkedin;
  const githubLink = socials.github;

  return (
    <div id="bio">
      <Avatar className="bio-avatar" alt={author} sx={{ width: 100, height: 100 }} src="/profile-picture.jpg" />
      <span>
        Écrit par <strong>{author}</strong>
      </span>
      <div id="social-links-bio">
        <Tooltip title="LinkedIn">
          <a href={linkedinLink}>
            <StaticImage src="../../../images/icons/socials/linkedin-icon.png" alt="linkedin" />
          </a>
        </Tooltip>

        <a href={githubLink}>
          <Tooltip title="Github">
            <div>
              <StaticImage src="../../../images/icons/socials/github-icon.png" alt="github" />
            </div>
          </Tooltip>
        </a>
      </div>
    </div>
  );
}
