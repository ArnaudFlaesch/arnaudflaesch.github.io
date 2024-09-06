import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { IRepository } from '../../../model/IRepository';
import {
  DockerIcon,
  GradleIcon,
  JUnitIcon,
  KotlinIcon,
  PostgreSQLIcon,
  SnykIcon,
  SpringBootIcon
} from './LanguagesIcons';
import RepositoryWidget from './RepositoryWidget';

export default function DashWebServicesProject(): React.ReactElement {
  const description = 'DASH.WEBSERVICES.PROJECT.DESCRIPTION';
  const QUERY_DASH_WEBSERVICES = graphql`
    {
      github {
        repository(name: "Dash-WebServices", owner: "ArnaudFlaesch") {
          name
          url
          languages(first: 5) {
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

  const dashWebServicesRepo: IRepository = useStaticQuery(QUERY_DASH_WEBSERVICES).github.repository;
  const repositoryIcons = [
    <KotlinIcon key={'Kotlin'} />,
    <SpringBootIcon key={'Spring Boot'} />,
    <JUnitIcon key={'JUnit 5'} />,
    <GradleIcon key={'Gradle'} />,
    <DockerIcon key={'Docker'} />,
    <PostgreSQLIcon key={'PostgreSQL'} />,
    <SnykIcon key={'Snyk'} />
  ];

  return (
    <RepositoryWidget
      key={dashWebServicesRepo.name}
      description={description}
      repoIcons={repositoryIcons}
      repositoryData={dashWebServicesRepo}
    />
  );
}
