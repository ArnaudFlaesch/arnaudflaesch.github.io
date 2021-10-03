import Layout from '../components/layout';
import Seo from '../components/seo';
import * as React from 'react';
import skills from '../components/skills/SkillData';
import './skills/skills.css';

export default function Skills(props) {
  return (
    <Layout>
      <Seo title="Compétences" />
      <div>
        Skills
        <div className="skillPage">
          {skills.map((skill) => {
            return <div>{skill.title}</div>;
          })}
        </div>
      </div>
    </Layout>
  );
}
