import { useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import { IEdge, IRepository } from '../model/IRepository';

import RepositoryWidget from '../components/projects/RepositoryWidget';
export default function Projects(): React.ReactElement {
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
    'WizardLibrary',
    'FunChess'
  ];
  const repositories: IRepository[] = useStaticQuery(QUERY)
    .github.viewer.repositories.edges.map((data: IEdge) => data.node)
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
