/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

interface IProps {
  translatedTitle?: string;
  translatedDescription?: string;
  language: string;
  location: string;
  image?: string;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: any[];
}

export default function Seo(props: Readonly<IProps>): React.ReactElement {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          job
          imageUrl
          keywords
          siteName
          siteUrl
          rss
        }
      }
    }
  `);
  const metaAuthor = site.siteMetadata.author;
  const jobTitle = site.siteMetadata.job;
  const defaultTitle = `${metaAuthor}, ${props.language === 'fr' ? jobTitle : 'Software developer'}`;
  const title = props.translatedTitle ? `${props.translatedTitle} - ${defaultTitle}` : defaultTitle;
  const metaDescription = props.translatedDescription;
  const metaSiteName = site.siteMetadata.siteName;
  const metaImage = props.image ?? site.siteMetadata.imageUrl;
  const type = props.type ?? 'website';
  const rssFeed = site.siteMetadata.rss;

  const metaTags = props.meta?.map((meta) => (
    <meta key={meta.property} property={meta.property} content={meta.content} />
  ));

  return (
    <>
      <html lang={props.language} />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription} />
      <meta name="author" content={metaAuthor} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={metaSiteName} />
      <meta property="og:url" content={`${site.siteMetadata.siteUrl}${props.location}`} />
      <meta property="og:type" content={type} />
      <meta name="keywords" content={site.siteMetadata.keywords} />
      {metaTags}
      <meta name="google-site-verification" content="LKNW3ns7yC7LiA86Oz56msNTna7-nqN3JiX7IltrMeU" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title={props.language === 'fr' ? 'Flux RSS pour les articles de blog' : 'RSS feed for blog articles'}
        href={rssFeed}
      ></link>
    </>
  );
}
