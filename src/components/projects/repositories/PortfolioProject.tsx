import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { IRepository } from '../../../model/IRepository';
import RepositoryWidget from './RepositoryWidget';
import { StaticImage } from 'gatsby-plugin-image';

export default function PortfolioProject(): React.ReactElement {
  const QUERY = graphql`
    {
      github {
        repository(name: "arnaudflaesch.github.io", owner: "ArnaudFlaesch") {
          createdAt
          description
          name
          owner {
            id
          }
          pushedAt
          url
          primaryLanguage {
            name
          }
          languages(first: 3) {
            edges {
              node {
                name
                color
              }
              size
            }
            totalSize
          }
        }
      }
    }
  `;

  const portfolioRepo: IRepository = useStaticQuery(QUERY).github.repository;
  const repositoryIcons = [
    <StaticImage
      key="react"
      style={{ height: '2.5rem', width: '2.5rem' }}
      src="../../../images/programming-logos/react-logo.png"
      alt="react-logo"
    />
  ];

  return (
    <div>
      {<RepositoryWidget key={portfolioRepo.name} repoIcons={repositoryIcons} repositoryData={portfolioRepo} />}
    </div>
  );
}
