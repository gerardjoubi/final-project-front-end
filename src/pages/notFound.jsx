import React from "react";

const NotFound = props => {
  return (
    <React.Fragment>
      <h1>404 Not found</h1>
      <h2>The url "{props.location.pathname}" is not specified</h2>
    </React.Fragment>
  );
};

export default NotFound;
