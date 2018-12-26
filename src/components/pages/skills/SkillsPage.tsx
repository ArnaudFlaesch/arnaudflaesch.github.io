import * as React from 'react';
import SkillChart from './SkillChart';
import skills from "./SkillData";
import "./SkillsPage.css";

const SkillsPage: React.FunctionComponent = props => {
    return (
        <div>
            Skills
            <div className="skillPage">
                {skills.map(skill => {
                    return (
                        <SkillChart key={skill.title} {...skill} />
                    );
                })}
            </div>
        </div>
    )
}
export default SkillsPage;
