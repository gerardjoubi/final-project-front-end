import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink activeClassName="is-active" className="navbar-item" to="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="hello"
            />
          </NavLink>

          <NavLink
            role="button"
            activeClassName="is-active"
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
            <NavLink to="/" activeClassName="is-active" className="navbar-item">
              Home
            </NavLink>

            <NavLink
              to="/profile"
              activeClassName="is-active"
              className="navbar-item"
            >
              User Profile
            </NavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink activeClassName="is-active" className="navbar-link">
                More
              </NavLink>

              <div className="navbar-dropdown">
                <NavLink activeClassName="is-active" className="navbar-item">
                  About
                </NavLink>
                <NavLink activeClassName="is-active" className="navbar-item">
                  Jobs
                </NavLink>
                <NavLink activeClassName="is-active" className="navbar-item">
                  Contact
                </NavLink>
                <hr className="navbar-divider" />
                <NavLink activeClassName="is-active" className="navbar-item">
                  Report an issue
                </NavLink>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <NavLink className="button is-primary">
                  <strong>Sign up</strong>
                </NavLink>
                <NavLink to="login" className="button is-light">
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
