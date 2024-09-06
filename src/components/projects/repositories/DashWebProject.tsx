import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { IRepository } from '../../../model/IRepository';
import { AngularIcon, CypressIcon, JestIcon, SassIcon } from './LanguagesIcons';
import RepositoryWidget from './RepositoryWidget';

export default function DashWebProject(): React.ReactElement {
  const description = 'DASH.WEB.PROJECT.DESCRIPTION';
  const QUERY_DASH_WEB = graphql`
    {
      github {
        repository(name: "Dash-Web", owner: "ArnaudFlaesch") {
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

  const dashWebRepo: IRepository = useStaticQuery(QUERY_DASH_WEB).github.repository;
  const repositoryIcons = [
    <AngularIcon key={'Angular 2'} />,
    <JestIcon key={'Jest'} />,
    <SassIcon key={'Sass'} />,
    <CypressIcon key={'Cypress'} />
  ];

  return (
    <RepositoryWidget
      key={dashWebRepo.name}
      description={description}
      repoIcons={repositoryIcons}
      repositoryData={dashWebRepo}
    />
  );
}
