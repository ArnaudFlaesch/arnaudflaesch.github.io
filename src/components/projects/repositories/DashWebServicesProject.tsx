import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { IRepository } from '../../../model/IRepository';
import RepositoryWidget from './RepositoryWidget';
import { StaticImage } from 'gatsby-plugin-image';
import TooltipIcon from '../../tooltip-icon/TooltipIcon';

export default function DashWebServicesProject(): React.ReactElement {
  const ICON_HEIGHT = 40;
  const ICON_WIDTH = 40;
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

  const dashWebServicesRepo: IRepository = useStaticQuery(QUERY).github.repository;
  const repositoryIcons = [
    <TooltipIcon
      key={'Kotlin'}
      tooltip="Kotlin"
      image={
        <StaticImage
          src="../../../images/icons/backend/kotlin.svg"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Kotlin"
        />
      }
    />,
    <TooltipIcon
      key={'Spring Boot'}
      tooltip="Spring Boot"
      image={
        <StaticImage
          src="../../../images/icons/backend/spring.svg"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Spring Boot"
        />
      }
    />,
    <TooltipIcon
      key={'JUnit 5'}
      tooltip="JUnit 5"
      image={
        <StaticImage
          src="../../../images/icons/backend/junit.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="JUnit 5"
        />
      }
    />,
    <TooltipIcon
      key={'Gradle'}
      tooltip="Gradle"
      image={
        <StaticImage
          src="../../../images/icons/backend/gradle.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Gradle"
        />
      }
    />,
    <TooltipIcon
      key={'Docker'}
      tooltip="Docker"
      image={
        <StaticImage
          src="../../../images/icons/tools/docker.svg"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Docker"
        />
      }
    />,
    <TooltipIcon
      key={'PostgreSQL'}
      tooltip="PostgreSQL"
      image={
        <StaticImage
          src="../../../images/icons/tools/postgresql.svg"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="PostgreSQL"
        />
      }
    />,
    <TooltipIcon
      key={'Snyk'}
      tooltip="Snyk"
      image={
        <StaticImage src="../../../images/icons/tools/snyk.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Snyk" />
      }
    />,
    <TooltipIcon
      key={'Heroku'}
      tooltip="Heroku"
      image={
        <StaticImage
          src="../../../images/icons/tools/heroku.svg"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Heroku"
        />
      }
    />
  ];

  return (
    <RepositoryWidget key={dashWebServicesRepo.name} repoIcons={repositoryIcons} repositoryData={dashWebServicesRepo} />
  );
}
