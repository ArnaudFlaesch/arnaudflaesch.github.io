import './page-styles/projets.scss';

import * as React from 'react';

import { graphql } from 'gatsby';
import CashManagerProject from '../components/projects/repositories/CashManagerProject';
import DashWebProject from '../components/projects/repositories/DashWebProject';
import DashWebServicesProject from '../components/projects/repositories/DashWebServicesProject';
import PortfolioProject from '../components/projects/repositories/PortfolioProject';
import Seo from '../components/Seo';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { getTranslation } from '../utils/TranslationUtils';

const titleCode = 'PROJECTS.PAGE.TITLE';
const descriptionCode = 'PROJECTS.PAGE.DESCRIPTION';
const namespaceCode = 'projets';

export default function Projets(props: Readonly<IPageProps>): React.ReactElement {
  return (
    <Layout titleCode={titleCode} descriptionCode={descriptionCode} location={props.location}>
      <div id="projects-list">
        <DashWebProject />
        <DashWebServicesProject />
        <PortfolioProject />
        <CashManagerProject />
      </div>
    </Layout>
  );
}

export const Head = ({ location, data, pageContext }) => {
  const translatedTitle = getTranslation(titleCode, pageContext.language, namespaceCode, data.locales.edges);
  const translatedDescription = getTranslation(
    descriptionCode,
    pageContext.language,
    namespaceCode,
    data.locales.edges
  );
  return (
    <Seo
      location={location.pathname}
      translatedTitle={translatedTitle}
      translatedDescription={translatedDescription}
      language={pageContext.language}
    />
  );
};

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
