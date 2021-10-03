import React from 'react';
import { IEdge, IRepository } from './IRepository';

export default function RepositoryWidget(
  repositoryData: IRepository
): React.ReactElement {
  function sortEdgesBySize(edges: IEdge[]): IEdge[] {
    return edges.sort((edgeA: IEdge, edgeB: IEdge) => {
      if (edgeA.size > edgeB.size) {
        return -1;
      }
      if (edgeA.size < edgeB.size) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <div>
      <h3>
        <a href={repositoryData.url}>{repositoryData.name}</a>
      </h3>
      <div>{repositoryData.description}</div>
      <div>{repositoryData.primaryLanguage.name}</div>
      <div>
        {repositoryData.languages &&
          sortEdgesBySize(repositoryData.languages.edges).map((edge) => {
            return (
              <div style={{ backgroundColor: edge.node.color }}>
                <span>{edge.node.name}</span>
                <span>
                  {Math.round(
                    (edge.size / repositoryData.languages.totalSize) * 100
                  )}{' '}
                  %{' '}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
