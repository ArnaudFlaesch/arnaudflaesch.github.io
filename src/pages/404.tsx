import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';

export default function NotFoundPage(): React.ReactElement {
  return (
    <Layout>
      <Seo title="404: Not found" location="/404" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
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
