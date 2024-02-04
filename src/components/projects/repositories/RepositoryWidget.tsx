import Tooltip from '@mui/material/Tooltip/Tooltip';
import React from 'react';
import { IEdge, IRepository } from '../../../model/IRepository';
import './RepositoryWidget.scss';
import { StaticImage } from 'gatsby-plugin-image';
import TooltipIcon from '../../tooltip-icon/TooltipIcon';

interface IProps {
  repoIcons?: React.JSX.Element[];
  repositoryData: IRepository;
}

export default function RepositoryWidget(props: Readonly<IProps>): React.ReactElement {
  const ICON_HEIGHT = 40;
  const ICON_WIDTH = 40;

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
      <div className="repository-widget-title">
        <h3>
          <a href={props.repositoryData.url}>{props.repositoryData.name}</a>
        </h3>
        <div>
          <a href={props.repositoryData.url}>
            <TooltipIcon
              tooltip="Lien GitHub"
              image={
                <StaticImage
                  src="../../../images/icons/tools/github.png"
                  width={ICON_WIDTH}
                  height={ICON_HEIGHT}
                  alt="Lien GitHub"
                />
              }
            />
          </a>
        </div>
      </div>
      <div>{props.repositoryData.description}</div>
      <div>{props.repositoryData.primaryLanguage?.name}</div>
      <div className="repository-icons-container">
        <div>Stack technique :</div>
        <div className="repository-icons">{props.repoIcons}</div>
      </div>
      <div className="languages-container">
        {props.repositoryData.languages &&
          sortEdgesBySize(props.repositoryData.languages.edges).map((edge) => {
            return (
              <Tooltip key={edge.node.name} title={edge.node.name}>
                <div
                  style={{
                    height: '1.5rem',
                    backgroundColor: edge.node.color,
                    width: `${Math.fround((edge.size / props.repositoryData.languages.totalSize) * 100)}%`
                  }}
                />
              </Tooltip>
            );
          })}
      </div>
    </div>
  );
}
