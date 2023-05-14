import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import DashWebProject from './projects/DashWebProject';
import DashWebServicesProject from './projects/DashWebServicesProject';
import PortfolioProject from './projects/PortfolioProject';
import './projects/projects.scss';

export default function Projects(): React.ReactElement {
  return (
    <Layout>
      <Seo title="Projets" />
      <div id="projects-list">
        <DashWebProject />
        <DashWebServicesProject />
        <PortfolioProject />
      </div>
    </Layout>
  );
}
