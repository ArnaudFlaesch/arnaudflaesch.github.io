import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { IRepository } from '../../model/IRepository';
import RepositoryWidget from '../../components/projects/RepositoryWidget';
import { StaticImage } from 'gatsby-plugin-image';

export default function DashWebServicesProject(): React.ReactElement {
  const QUERY = graphql`
    {
      github {
        repository(name: "Dash-WebServices", owner: "ArnaudFlaesch") {
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

  const dashWebServicesRepo: IRepository = useStaticQuery(QUERY).github.repository;
  const repositoryIcons = [
    <StaticImage className="h-10 w-10" src="../../images/programming-logos/kotlin-logo.png" alt="kotlin-logo" />
  ];

  return (
    <div>
      {
        <RepositoryWidget
          key={dashWebServicesRepo.name}
          repoIcons={repositoryIcons}
          repositoryData={dashWebServicesRepo}
        />
      }
    </div>
  );
}
