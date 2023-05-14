import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import * as React from 'react';
import skills from '../data/SkillData';
import './skills/skills.css';

export default function Skills(): React.ReactElement {
  return (
    <Layout>
      <Seo title="Compétences" />
      <div>
        Skills
        <div className="skill-page">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-label">
              {skill.title}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
