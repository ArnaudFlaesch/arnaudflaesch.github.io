import { useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { IRepository } from '../model/IRepository';

import RepositoryWidget from './projects/RepositoryWidget';
export default function Projects() {
  const QUERY = graphql`
    {
      github {
        viewer {
          repositories(last: 20) {
            edges {
              node {
                createdAt
                description
                name
                owner {
                  id
                }
                pushedAt
                url
                primaryLanguage {
                  name
                }
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
        }
      }
    }
  `;
  const REPOSITORIES_LIST = [
    'Dash-Web',
    'Dash-WebServices',
    'TreasureHunt',
    'WizardLibrary',
    'FunChess'
  ];
  const repositories: IRepository[] = useStaticQuery(QUERY)
    .github.viewer.repositories.edges.map((data: any) => data.node)
    .filter((repository: IRepository) =>
      REPOSITORIES_LIST.includes(repository.name)
    );

  return (
    <Layout>
      <Seo title="Projets" />
      <div>
        {repositories &&
          repositories.map((repository) => {
            return <RepositoryWidget key={repository.name} {...repository} />;
          })}
      </div>
    </Layout>
  );
}
