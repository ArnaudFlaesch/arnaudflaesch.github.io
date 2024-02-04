import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { IRepository } from '../../../model/IRepository';
import RepositoryWidget from './RepositoryWidget';
import { StaticImage } from 'gatsby-plugin-image';
import TooltipIcon from '../../tooltip-icon/TooltipIcon';

export default function PortfolioProject(): React.ReactElement {
  const ICON_HEIGHT = 40;
  const ICON_WIDTH = 40;
  const QUERY = graphql`
    {
      github {
        repository(name: "arnaudflaesch.github.io", owner: "ArnaudFlaesch") {
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

  const portfolioRepo: IRepository = useStaticQuery(QUERY).github.repository;
  const repositoryIcons = [
    <TooltipIcon
      key={'ReactJS'}
      tooltip="ReactJS"
      image={
        <StaticImage
          src="../../../images/icons/frontend/reactjs.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="ReactJS"
        />
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
      key={'Gatsby'}
      tooltip="Gatsby"
      image={
        <StaticImage
          src="../../../images/icons/frontend/gatsby.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Gatsby"
        />
      }
    />,
    <TooltipIcon
      key={'TypeScript'}
      tooltip="TypeScript"
      image={
        <StaticImage
          src="../../../images/icons/frontend/typescript.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="TypeScript"
        />
      }
    />,
    <TooltipIcon
      key={'Github Actions'}
      tooltip="Github Actions"
      image={
        <StaticImage
          src="../../../images/icons/tools/github-actions.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="Github Actions"
        />
      }
    />
  ];

  return <RepositoryWidget key={portfolioRepo.name} repoIcons={repositoryIcons} repositoryData={portfolioRepo} />;
}
