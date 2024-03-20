import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { About } from '../about/About.js';

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">GGAD</div>
      <ul className="nav-menu">
        <li><a href="/">Home</a></li>
        <li><Link to="/About">About</Link></li>
        <li>Team</li>
        <li>Current Projects</li>
        <li>Achivements</li>
      </ul>
    </div>
  );
}

export default Navbar;