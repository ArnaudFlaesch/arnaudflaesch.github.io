import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { IRepository } from '../../../model/IRepository';
import RepositoryWidget from './RepositoryWidget';
import { StaticImage } from 'gatsby-plugin-image';

export default function DashWebProject(): React.ReactElement {
  const QUERY_DASH_WEB = graphql`
    {
      github {
        repository(name: "Dash-Web", owner: "ArnaudFlaesch") {
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

  const dashWebRepo: IRepository = useStaticQuery(QUERY_DASH_WEB).github.repository;
  const repositoryIcons = [
    <StaticImage
      key="angular"
      style={{ height: '2.5rem', width: '2.5rem' }}
      src="../../../images/programming-logos/angular-logo.png"
      alt="angular-logo"
    />
  ];

  return (
    <div>{<RepositoryWidget key={dashWebRepo.name} repoIcons={repositoryIcons} repositoryData={dashWebRepo} />}</div>
  );
}
