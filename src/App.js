import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import "bulma/css/bulma.css";

import Navbar from "./Components/navBar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          {/* <Route path="/movies/:id" component={MovieForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" /> */}
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
