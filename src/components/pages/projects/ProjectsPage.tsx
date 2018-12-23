import * as React from 'react';
import { RepoCard, UserCard } from 'react-github-cards';
import 'react-github-cards/dist/default.css';

const ProjectsPage: React.FunctionComponent = props => {
    return (
        <div>
            <div>Projects</div>
            <UserCard username="ArnaudFlaesch" />
        </div>
    )
}
export default ProjectsPage;