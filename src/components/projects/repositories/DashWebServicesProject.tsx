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
    <TooltipIcon
      key={'Kotlin'}
      tooltip="Kotlin"
      image={
        <StaticImage
          src="../../../images/icons/backend/kotlin.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Kotlin"
        />
      }
    />
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
