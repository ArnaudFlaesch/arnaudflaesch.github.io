import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { IRepository } from '../../../model/IRepository';
import RepositoryWidget from './RepositoryWidget';
import { StaticImage } from 'gatsby-plugin-image';
import TooltipIcon from '../../tooltip-icon/TooltipIcon';

export default function DashWebProject(): React.ReactElement {
  const ICON_HEIGHT = 40;
  const ICON_WIDTH = 40;
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
    <TooltipIcon
      key={'Angular 2'}
      tooltip="Angular 2"
      image={
        <StaticImage
          src="../../../images/icons/frontend/angular2.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Angular 2"
        />
      }
    />,
    <TooltipIcon
      key={'Jest'}
      tooltip="Jest"
      image={
        <StaticImage src="../../../images/icons/frontend/jest.png" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Jest" />
      }
    />,
    <TooltipIcon
      key={'Sass'}
      tooltip="Sass"
      image={
        <StaticImage src="../../../images/icons/frontend/sass.png" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Sass" />
      }
    />,
    <TooltipIcon
      key={'Cypress'}
      tooltip="Cypress"
      image={
        <StaticImage
          src="../../../images/icons/frontend/cypress.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Cypress"
        />
      }
    />
  ];

  return <RepositoryWidget key={dashWebRepo.name} repoIcons={repositoryIcons} repositoryData={dashWebRepo} />;
}
