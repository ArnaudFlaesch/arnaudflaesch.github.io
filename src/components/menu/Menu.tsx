import * as React from "react";
import { Link } from "react-router-dom";

const Menu: React.FunctionComponent = props => {
    return (
        <div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="#"><Link to="/">CV</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="/projects/">Projets</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="/skills">Compétences</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="/perso/">Personnel</Link></a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;