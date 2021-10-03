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
      <Link to="/curriculum/">Curriculum Vitae</Link> <br />
      <Link to="/skills/">Compétences</Link> <br />
    </p>
    <script
      src="https://platform.linkedin.com/badges/js/profile.js"
      async
      defer
      type="text/javascript"
    ></script>
  </Layout>
);
