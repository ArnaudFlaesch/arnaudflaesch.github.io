import * as React from "react";
import { Link } from "react-router-dom";

const Menu: React.FunctionComponent = props => {
    return (
        <div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/" className="nav-link">CV</Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects/" className="nav-link">Projets</Link>
                </li>
                <li className="nav-item">
                    <Link to="/skills" className="nav-link">Compétences</Link>
                </li>
                <li className="nav-item">
                    <Link to="/perso/" className="nav-link">Personnel</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;