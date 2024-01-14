import React from 'react';
import { IEdge, IRepository } from '../../../model/IRepository';
import './RepositoryWidget.scss';

interface IProps {
  repoIcons?: React.JSX.Element[];
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
    <div className="repository-widget-container">
      <h3>
        <a href={props.repositoryData.url}>{props.repositoryData.name}</a>
      </h3>
      <div>{props.repositoryData.description}</div>
      <div>{props.repositoryData.primaryLanguage?.name}</div>
      <div className="repository-icons-container">{props.repoIcons}</div>
      <div className="languages-container">
        {props.repositoryData.languages &&
          sortEdgesBySize(props.repositoryData.languages.edges).map((edge) => {
            return (
              <div
                key={edge.node.name}
                style={{
                  height: '1.5rem',
                  backgroundColor: edge.node.color,
                  width: `${Math.round((edge.size / props.repositoryData.languages.totalSize) * 100)}%`
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
