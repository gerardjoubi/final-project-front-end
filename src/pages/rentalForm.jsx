import React, { Component } from "react";
import Input from "../Components/common/input";

class RentalForm extends Component {
  state = {
    userId: "5cd0333ad22fd0ed31981214"
  };

  render() {
    return (
      <React.Fragment>
        <div class="hero column is-5">
          <Input onChange={this.handleChange} placeHolder="title" />
          <Input onChange={this.handleChange} placeHolder="category" />
          <Input onChange={this.handleChange} placeHolder="message" />
        </div>
      </React.Fragment>
    );
  }
  handleChange = ({ currentTarget: hey }) => {
    console.log(hey);
  };
}

export default RentalForm;
