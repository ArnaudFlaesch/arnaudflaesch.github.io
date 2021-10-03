import * as React from 'react';
import ExperienceComponent from '../components/curriculum/ExperienceComponent';
import formations from '../data/FormationData';
import jobs from '../data/JobData';
import Layout from '../components/layout';
import Seo from '../components/seo';
export default function Curriculum(props) {
  return (
    <Layout>
      <Seo title="Curiculum Vitae CV" />
      <div>
        CV
        <div
          className="badge-base LI-profile-badge"
          data-locale="fr_FR"
          data-size="medium"
          data-theme="light"
          data-type="HORIZONTAL"
          data-vanity="arnaudflaesch"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://fr.linkedin.com/in/arnaudflaesch?trk=profile-badge"
          >
            Arnaud Flaesch
          </a>
        </div>
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
