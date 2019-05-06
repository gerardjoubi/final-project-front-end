import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import UserCard from "../Components/userCard";
class UserProfile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="columns is-multiline is-mobile">
          <UserCard text={this.state.lorem1} />
        </div>
        <NavLink className="v-centered" to="/rental-form">
          Submit Rental Form
        </NavLink>
      </React.Fragment>
    );
  }
}

export default UserProfile;
