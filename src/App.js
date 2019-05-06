import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import "bulma/css/bulma.css";
import Navbar from "./Components/navBar";
import LandingPage from "./pages/landingPage";
import LoginForm from "./pages/loginForm";
import NotFound from "./pages/notFound";
import UserProfile from "./pages/userProfile";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/accueil" component={LandingPage} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/accueil" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
