import { Icon } from '@mui/material';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import React, { ReactElement } from 'react';

interface IProps {
  tooltip: string;
  image: ReactElement;
}

export default function TooltipIcon(props: Readonly<IProps>): ReactElement {
  return (
    <Tooltip key={props.tooltip} title={props.tooltip}>
      <Icon fontSize="large">{props.image}</Icon>
    </Tooltip>
  );
}
