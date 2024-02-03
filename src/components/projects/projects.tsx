import './projects.scss';

import * as React from 'react';

import CashManagerProject from './repositories/CashManagerProject';
import DashWebProject from './repositories/DashWebProject';
import DashWebServicesProject from './repositories/DashWebServicesProject';
import PortfolioProject from './repositories/PortfolioProject';

export default function Projects(): React.ReactElement {
  return (
    <div id="projects-list">
      <DashWebProject />
      <DashWebServicesProject />
      <PortfolioProject />
      <CashManagerProject />
    </div>
  );
}
