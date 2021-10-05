import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Profile from '../components/Profile';
import Seo from '../components/seo';

export default function Index() {
  return (
    <div>
      <div className="float-left ml-10 mt-40">
        <Profile />
      </div>

      <Layout>
        <Seo title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>

        <p>
          <Link to="/projects/">Projets professionnels et personnels</Link>{' '}
          <br />
          <Link to="/curriculum/">Curriculum Vitae</Link> <br />
          <Link to="/skills/">Compétences</Link> <br />
        </p>
      </Layout>
    </div>
  );
}
