import * as React from 'react';
import { RepoCard, UserCard } from 'react-github-cards';
import 'react-github-cards/dist/default.css';
import "./ProjectsPage.css";

const ProjectsPage: React.FunctionComponent = props => {
    return (
        <div>
            <UserCard username="ArnaudFlaesch" />
            
            <div>Projects</div>
            
            <RepoCard username="ArnaudFlaesch" repo="Dash" />
            <RepoCard username="ArnaudFlaesch" repo="WebCrawler" />
            <RepoCard username="ArnaudFlaesch" repo="BlackBox-Services" />
            <RepoCard username="ArnaudFlaesch" repo="BlackBox-Web" />
            <RepoCard username="ArnaudFlaesch" repo="FranC" />
            <RepoCard username="ArnaudFlaesch" repo="FunChess" />
        </div>
    )
}
export default ProjectsPage;