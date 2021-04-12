import React from "react";
import { Layout, SEO } from "components/common";
import { Intro, Skills, Contact, Projects } from "components/landing";

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
    <script
      type="text/javascript"
      src="https://platform.linkedin.com/badges/js/profile.js"
      async
      defer
    ></script>
  </Layout>
);
