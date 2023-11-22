import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';

export default function NotFoundPage(): React.ReactElement {
  return (
    <Layout>
      <Seo title="404: Not found" location="/404" />
      <h1>404</h1>
      <p>La page que vous cherchez n'existe pas.</p>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
