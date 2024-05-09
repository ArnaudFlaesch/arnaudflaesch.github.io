import { graphql } from 'gatsby';
import React from 'react';
import Seo from '../components/Seo';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage(props: Readonly<IPageProps>): React.ReactElement {
  const { t } = useTranslation();
  return (
    <Layout titleCode="404" location={props.location}>
      <p>{t('PAGE.NOT.FOUND.MESSAGE')}</p>
    </Layout>
  );
}

export const Head = ({ location, pageContext }) => (
  <Seo location={location.pathname} translatedTitle="404: Not found" language={pageContext.language} />
);

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
