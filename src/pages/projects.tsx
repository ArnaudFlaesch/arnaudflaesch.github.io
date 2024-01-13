import './projects.scss';

import * as React from 'react';

import DashWebProject from '../components/projects/DashWebProject';
import DashWebServicesProject from '../components/projects/DashWebServicesProject';
import PortfolioProject from '../components/projects/PortfolioProject';

export default function Projects(): React.ReactElement {
  return (
    <div id="projects-list">
      <DashWebProject />
      <DashWebServicesProject />
      <PortfolioProject />
    </div>
  );
}
