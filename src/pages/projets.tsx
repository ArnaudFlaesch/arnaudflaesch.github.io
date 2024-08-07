import './page-styles/projets.scss';

import * as React from 'react';

import { HeadComponent } from '../components/head/head';
import CashManagerProject from '../components/projects/repositories/CashManagerProject';
import DashWebProject from '../components/projects/repositories/DashWebProject';
import DashWebServicesProject from '../components/projects/repositories/DashWebServicesProject';
import PortfolioProject from '../components/projects/repositories/PortfolioProject';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';

const titleCode = 'PROJECTS.PAGE.TITLE';
const descriptionCode = 'PROJECTS.PAGE.DESCRIPTION';
const namespaceCode = 'projets';

export default function Projets(props: Readonly<IPageProps>): React.ReactElement {
  return (
    <Layout
      titleCode={titleCode}
      descriptionCode={descriptionCode}
      i18nNamespace={namespaceCode}
      location={props.location}
    >
      <div id="projects-list">
        <DashWebProject />
        <DashWebServicesProject />
        <PortfolioProject />
        <CashManagerProject />
      </div>
    </Layout>
  );
}

export const Head = ({ location }: { location: Location }) =>
  HeadComponent(titleCode, descriptionCode, namespaceCode, location);
