import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavigationScreen.css";

const Navigation = () => {
  return (
    <nav className="navbar-style mt-2">
      <ul className="navbar-list">
        <li>
          <a href="#" className="nav-item">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-item">
            About
          </a>
        </li>
        <li>
          <a href="#" className="nav-item">
            Project
          </a>
        </li>
        <li>
          <a href="#" className="nav-item">
            Qualification
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
