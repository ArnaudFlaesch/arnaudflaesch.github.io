import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { IRepository } from '../../../model/IRepository';
import RepositoryWidget from './RepositoryWidget';
import { StaticImage } from 'gatsby-plugin-image';
import TooltipIcon from '../../tooltip-icon/TooltipIcon';

export default function CashManagerProject(): React.ReactElement {
  const description = 'CASHMANAGER.PROJECT.DESCRIPTION';
  const ICON_HEIGHT = 40;
  const ICON_WIDTH = 40;
  const QUERY_CASH_MANAGER = graphql`
    {
      github {
        repository(name: "CashManager", owner: "ArnaudFlaesch") {
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

  const cashManagerRepo: IRepository = useStaticQuery(QUERY_CASH_MANAGER).github.repository;
  const repositoryIcons = [
    <TooltipIcon
      key={'Angular 2'}
      tooltip="Angular 2"
      image={
        <StaticImage
          src="../../../images/icons/frontend/angular2.svg"
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
        <StaticImage src="../../../images/icons/frontend/jest.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Jest" />
      }
    />,
    <TooltipIcon
      key={'Sass'}
      tooltip="Sass"
      image={
        <StaticImage src="../../../images/icons/frontend/sass.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Sass" />
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

  return (
    <RepositoryWidget
      key={cashManagerRepo.name}
      description={description}
      repoIcons={repositoryIcons}
      repositoryData={cashManagerRepo}
    />
  );
}
