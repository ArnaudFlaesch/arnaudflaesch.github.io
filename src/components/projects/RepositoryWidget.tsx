import React from 'react';
import { IEdge, IRepository } from '../../model/IRepository';

interface IProps {
  repoIcons?: JSX.Element[];
  repositoryData: IRepository;
}

export default function RepositoryWidget(props: IProps): React.ReactElement {
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
    <div className="space-y-2">
      <h3>
        <a href={props.repositoryData.url}>{props.repositoryData.name}</a>
      </h3>
      <div>{props.repositoryData.description}</div>
      <div>{props.repositoryData.primaryLanguage?.name}</div>
      <div className="flex flex-row">{props.repoIcons}</div>
      <div className="flex flex-row w-1/2">
        {props.repositoryData.languages &&
          sortEdgesBySize(props.repositoryData.languages.edges).map((edge, index) => {
            return (
              <div
                key={edge.node.name}
                style={{
                  backgroundColor: edge.node.color,
                  width: `${Math.round((edge.size / props.repositoryData.languages.totalSize) * 100)}%`
                }}
                className={`h-4 ${index === 0 ? 'rounded-l-lg' : ''} ${
                  index === props.repositoryData.languages.edges.length - 1 ? 'rounded-r-lg' : ''
                }`}
              />
            );
          })}
      </div>
    </div>
  );
}
