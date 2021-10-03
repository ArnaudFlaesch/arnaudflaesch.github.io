import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <p>
      <Link to="/projects/">Projets professionnels et personnels</Link> <br />
    </p>
  </Layout>
);
