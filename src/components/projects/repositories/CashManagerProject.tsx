import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { IRepository } from '../../../model/IRepository';
import { AngularIcon, CypressIcon, JestIcon, SassIcon } from './LanguagesIcons';
import RepositoryWidget from './RepositoryWidget';

export default function CashManagerProject(): React.ReactElement {
  const description = 'CASHMANAGER.PROJECT.DESCRIPTION';
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
    <AngularIcon key={'Angular 2'} />,
    <JestIcon key={'Jest'} />,
    <SassIcon key={'Sass'} />,
    <CypressIcon key={'Cypress'} />
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
