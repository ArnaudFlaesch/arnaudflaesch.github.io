import { graphql } from 'gatsby';
import React from 'react';
import Seo from '../components/Seo';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';

export default function NotFoundPage(props: Readonly<IPageProps>): React.ReactElement {
  return (
    <Layout title="404" location={props.location}>
      <p>La page que vous cherchez n'existe pas.</p>
    </Layout>
  );
}

export const Head = () => <Seo title="404: Not found" location={'/404'} />;

export const pageQuery = graphql`
  query ($language: String!) {
    site {
      siteMetadata {
        title
      }
    }
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
