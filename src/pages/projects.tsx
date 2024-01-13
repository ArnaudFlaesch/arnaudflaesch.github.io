import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import DashWebProject from '../components/projects/DashWebProject';
import DashWebServicesProject from '../components/projects/DashWebServicesProject';
import PortfolioProject from '../components/projects/PortfolioProject';
import './projects.scss';

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
