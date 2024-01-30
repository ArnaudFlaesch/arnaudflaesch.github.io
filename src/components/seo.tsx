/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface IProps {
  title: string;
  location: string;
  description?: string;
  image?: string;
  lang?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: any[];
}

export default function Seo(props: Readonly<IProps>): React.ReactElement {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          job
          siteName
          siteUrl
        }
      }
    }
  `);

  const defaultTitle = site.siteMetadata.title;
  const metaDescription = props.description ?? site.siteMetadata.description;
  const metaAuthor = site.siteMetadata.author;
  const metaSiteName = site.siteMetadata.siteName;
  const meta = props.meta ?? [];
  const metaImage = props.image ?? site.siteMetadata.imageUrl;

  return (
    <Helmet
      htmlAttributes={{ lang: props.lang }}
      title={props.title}
      titleTemplate={defaultTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          name: 'author',
          content: metaAuthor
        },
        {
          property: 'og:title',
          content: props.title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:image',
          content: metaImage
        },
        {
          property: 'og:site_name',
          content: metaSiteName
        },
        {
          property: 'og:url',
          content: `${site.siteMetadata.siteUrl}${props.location}`
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords
        },
        {
          name: 'google-site-verification',
          content: 'LKNW3ns7yC7LiA86Oz56msNTna7-nqN3JiX7IltrMeU'
        }
      ].concat(meta)}
    />
  );
}
