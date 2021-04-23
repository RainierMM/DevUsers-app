import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { DevRegisterScreen } from "../components/DevRegisterScreen";
import { DevUsersScreen } from "../components/DevUsersScreen";
import { NavbarComp } from "../components/ui/NavbarComp";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={DevUsersScreen} />
          <Route exact path="/register" component={DevRegisterScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
