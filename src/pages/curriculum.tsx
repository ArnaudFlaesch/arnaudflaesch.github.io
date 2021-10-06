import * as React from 'react';
import ExperienceComponent from '../components/curriculum/ExperienceComponent';
import formations from '../data/FormationData';
import jobs from '../data/JobData';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default function Curriculum(): React.ReactElement {
  return (
    <Layout>
      <Seo title="Curiculum Vitae CV" />
      <div>
        <h1>CV</h1>
        {jobs.map((experience) => {
          return <ExperienceComponent key={experience.id} {...experience} />;
        })}
        {formations.map((formation) => {
          return <ExperienceComponent key={formation.id} {...formation} />;
        })}
      </div>
    </Layout>
  );
}
