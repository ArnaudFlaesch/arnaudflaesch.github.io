import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from '../logo.svg';
import "./Body.css";
import Menu from './menu/Menu';
import CVPage from './pages/CV/CVPage';
import PersoPage from './pages/perso/PersoPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import SkillsPage from './pages/skills/SkillsPage';

const Body: React.FunctionComponent = props => {
    return (
        <Router>
            <div>
                <Menu />
                <header className="center">
                    <img src={logo} className="Website-logo" alt="logo" />
                    <h1>Site en construction</h1>
                </header>
                <Route path="/" exact={true} component={CVPage} />
                <Route path="/projects/" component={ProjectsPage} />
                <Route path="/skills/" component={SkillsPage} />
                <Route path="/perso/" component={PersoPage} />
            </div>
        </Router>
    )
}

export default Body;