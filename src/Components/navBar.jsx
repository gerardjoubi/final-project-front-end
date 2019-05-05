import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </NavLink>

          <NavLink
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="page-navigation"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </NavLink>
        </div>

        <div id="page-navigation" className="navbar-menu">
          <div className="navbar-start">
            <NavLink className="navbar-item">Home</NavLink>

            <NavLink className="navbar-item">Documentation</NavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-link">More</NavLink>

              <div className="navbar-dropdown">
                <NavLink className="navbar-item">About</NavLink>
                <NavLink className="navbar-item">Jobs</NavLink>
                <NavLink className="navbar-item">Contact</NavLink>
                <hr className="navbar-divider" />
                <NavLink className="navbar-item">Report an issue</NavLink>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <NavLink className="button is-primary">
                  <strong>Sign up</strong>
                </NavLink>
                <NavLink className="button is-light">Log in</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
