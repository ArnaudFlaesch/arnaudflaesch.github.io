import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import DashWebProject from './projects/DashWebProject';
import DashWebServicesProject from './projects/DashWebServicesProject';

export default function Projects(): React.ReactElement {
  return (
    <Layout>
      <Seo title="Projets" />
      <div className="space-y-10">
        <DashWebProject />
        <DashWebServicesProject />
      </div>
    </Layout>
  );
}
