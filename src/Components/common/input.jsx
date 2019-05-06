import React from "react";

const Input = props => {
  return (
    <div className="field">
      <div className="control">
        <input
          className="input is-info"
          type="text"
          onChange={props.onChange}
          placeholder={props.placeHolder}
        />
      </div>
    </div>
  );
};

export default Input;
