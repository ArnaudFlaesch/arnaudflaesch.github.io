import './DetailBlock.scss';

import { ReactElement } from 'react';
import * as React from 'react';

interface IProps {
  titleComponent: ReactElement;
  detailComponent: ReactElement;
}

export default function DetailBlock(props: Readonly<IProps>): ReactElement {
  return (
    <div className="detail-block">
      <div className="block-title">{props.titleComponent}</div>
      <div className="detail-info">{props.detailComponent}</div>
    </div>
  );
}
