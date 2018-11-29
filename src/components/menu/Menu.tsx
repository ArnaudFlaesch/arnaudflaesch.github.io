import * as React from "react";
import { Link } from "react-router-dom";

const Menu: React.FunctionComponent = props => {
    return (
        <div>
            <nav>
                <ul className="vertical dropdown menu">
                    <li>
                        <Link to="/">CV</Link>
                    </li>
                    <li>
                        <Link to="/skills/">Compétences</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;