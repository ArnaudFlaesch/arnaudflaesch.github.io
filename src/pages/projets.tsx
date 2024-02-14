import './page-styles/projets.scss';

import * as React from 'react';

import CashManagerProject from '../components/projects/repositories/CashManagerProject';
import DashWebProject from '../components/projects/repositories/DashWebProject';
import DashWebServicesProject from '../components/projects/repositories/DashWebServicesProject';
import PortfolioProject from '../components/projects/repositories/PortfolioProject';
import Seo from '../components/Seo';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';

export default function Projets(props: Readonly<IPageProps>): React.ReactElement {
  return (
    <Layout title="Projets personnels" location={props.location}>
      <div id="projects-list">
        <DashWebProject />
        <DashWebServicesProject />
        <PortfolioProject />
        <CashManagerProject />
      </div>
    </Layout>
  );
}

export const Head = () => (
  <Seo location={'/projets'} title="Mes projets" description="Les projets personnels sur lesquels je travaille." />
);
