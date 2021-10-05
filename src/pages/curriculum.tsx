import * as React from 'react';
import ExperienceComponent from '../components/curriculum/ExperienceComponent';
import formations from '../data/FormationData';
import jobs from '../data/JobData';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default function Curriculum() {
  return (
    <Layout>
      <Seo title="Curiculum Vitae CV" />
      <div>
        CV
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
