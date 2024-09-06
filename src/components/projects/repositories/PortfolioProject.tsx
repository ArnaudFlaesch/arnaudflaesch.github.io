import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { IRepository } from '../../../model/IRepository';
import { GatsbyIcon, GithubActionsIcon, GraphQLIcon, ReactJSIcon, SassIcon, TypeScriptIcon } from './LanguagesIcons';
import RepositoryWidget from './RepositoryWidget';

export default function PortfolioProject(): React.ReactElement {
  const description = 'PORTFOLIO.PROJECT.DESCRIPTION';
  const QUERY = graphql`
    {
      github {
        repository(name: "arnaudflaesch.github.io", owner: "ArnaudFlaesch") {
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

  const portfolioRepo: IRepository = useStaticQuery(QUERY).github.repository;
  const repositoryIcons = [
    <ReactJSIcon key={'ReactJS'} />,
    <SassIcon key={'Jest'} />,
    <GatsbyIcon key={'Gatsby'} />,
    <TypeScriptIcon key={'TypeScript'} />,
    <GithubActionsIcon key={'Github Actions'} />,
    <GraphQLIcon key={'GraphQL'} />
  ];

  return (
    <RepositoryWidget
      key={portfolioRepo.name}
      description={description}
      repoIcons={repositoryIcons}
      repositoryData={portfolioRepo}
    />
  );
}
