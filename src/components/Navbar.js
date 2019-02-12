import React from "react";
import "../styles/Navbar.css";

const Navbar = props => (
    <div>
        <a className="navbar-brand" href="MeanGirlsClickyGame">Mean Girls Clicky Game</a>
        <li className="score">Score: {props.score} </li>
    </div>
)
 

export default Navbar;