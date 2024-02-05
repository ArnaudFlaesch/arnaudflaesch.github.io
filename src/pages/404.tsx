import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../layout/layout';
import Seo from '../components/Seo';
import { IPageProps } from '../model/IPageProps';

export default function NotFoundPage(props: Readonly<IPageProps>): React.ReactElement {
  return (
    <Layout location={props.location}>
      <h2>404</h2>
      <p>La page que vous cherchez n'existe pas.</p>
    </Layout>
  );
}

export const Head = () => <Seo title="404: Not found" location={'/404'} />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
