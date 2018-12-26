import * as React from 'react';
import ExperienceComponent from './ExperienceComponent';
import formations from "./FormationData";
import jobs from "./JobData";

const CVPage: React.FunctionComponent = props => {
    return (
        <div>
            CV
            <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="fr_FR" data-type="horizontal" data-theme="light"
                data-vanity="arnaudflaesch">
                <a className="LI-simple-link" href='https://fr.linkedin.com/in/arnaudflaesch?trk=profile-badge'>Arnaud Flaesch</a>
            </div>
            {jobs.map(experience => {
                return (
                    <ExperienceComponent key={experience.id} {...experience} />
                );
            })}
            {formations.map(formation => {
                return (
                    <ExperienceComponent key={formation.id} {...formation} />
                );
            })}
        </div>
    )
}
export default CVPage;