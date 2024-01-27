import Avatar from '@mui/material/Avatar/Avatar';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

export default function Bio(): React.ReactElement {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          job
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const job = data.site.siteMetadata?.job;

  return (
    <div className="bio">
      <Avatar className="bio-avatar" alt="Arnaud Flaesch" sx={{ width: 100, height: 100 }} src="/profile-picture.jpg" />

      {author && job && (
        <p>
          Écrit par <strong>{author}</strong>
        </p>
      )}
    </div>
  );
}
