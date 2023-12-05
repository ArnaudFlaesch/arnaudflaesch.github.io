import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

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
      <StaticImage
        className="bio-avatar"
        formats={['auto', 'webp', 'avif']}
        src="../../images/profile-picture.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author && job && (
        <p>
          Écrit par <strong>{author}</strong>, {job}
        </p>
      )}
    </div>
  );
}
