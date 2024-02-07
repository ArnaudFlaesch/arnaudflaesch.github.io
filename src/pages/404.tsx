import { graphql } from 'gatsby';
import React from 'react';
import Seo from '../components/Seo';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';

export default function NotFoundPage(props: Readonly<IPageProps>): React.ReactElement {
  return (
    <Layout location={props.location}>
      <h1>404</h1>
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
