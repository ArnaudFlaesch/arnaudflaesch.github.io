import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { IRepository } from '../../../model/IRepository';
import RepositoryWidget from './RepositoryWidget';
import { StaticImage } from 'gatsby-plugin-image';
import TooltipIcon from '../../tooltip-icon/TooltipIcon';

export default function CashManagerProject(): React.ReactElement {
  const ICON_HEIGHT = 40;
  const ICON_WIDTH = 40;
  const QUERY_CASH_MANAGER = graphql`
    {
      github {
        repository(name: "CashManager", owner: "ArnaudFlaesch") {
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

  const cashManagerRepo: IRepository = useStaticQuery(QUERY_CASH_MANAGER).github.repository;
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
    />
  ];

  return (
    <div>
      {<RepositoryWidget key={cashManagerRepo.name} repoIcons={repositoryIcons} repositoryData={cashManagerRepo} />}
    </div>
  );
}
