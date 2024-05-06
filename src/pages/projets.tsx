import './page-styles/projets.scss';

import * as React from 'react';

import CashManagerProject from '../components/projects/repositories/CashManagerProject';
import DashWebProject from '../components/projects/repositories/DashWebProject';
import DashWebServicesProject from '../components/projects/repositories/DashWebServicesProject';
import PortfolioProject from '../components/projects/repositories/PortfolioProject';
import Seo from '../components/Seo';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { graphql } from 'gatsby';

const title = 'Projets personnels';
const description = 'Les projets personnels sur lesquels je travaille.';

export default function Projets(props: Readonly<IPageProps>): React.ReactElement {
  return (
    <Layout title={title} description={description} location={props.location}>
      <div id="projects-list">
        <DashWebProject />
        <DashWebServicesProject />
        <PortfolioProject />
        <CashManagerProject />
      </div>
    </Layout>
  );
}

export const Head = () => <Seo location={'/projets'} title={title} description={description} />;

export const pageQuery = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
