import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/Logo.png";

function NavBar() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg  navbar-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            {/* Imagen tomada de  https://www.spotitgame.com/*/}
            <img src={logo} alt="Logo Spot It" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/help">
                  Help
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/howtoplay">
                  How To Play
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard">
                  Leaderboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
