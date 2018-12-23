import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from '../logo.svg';
import "./Body.css";
import CV from './menu/CV';
import Menu from './menu/Menu';
import SkillsPage from './menu/skills/SkillsPage';

const Body: React.FunctionComponent = props => {
    return (
        <Router>
            <div className="Website">
                <Menu />
                <header className="body">
                    <img src={logo} className="Website-logo" alt="logo" />
                    <h1>Site en construction</h1>
                    <Route path="/" exact={true} component={CV} />
                    <Route path="/skills/" component={SkillsPage} />
                </header>
            </div>
        </Router>
    )
}

export default Body;