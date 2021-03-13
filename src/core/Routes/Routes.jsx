import React from "react";
import { Switch, Route } from "react-router";
import Login from "../../pages/Login/Login";
import StartPage from "../../pages/Start/StartPage/StartPage";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <StartPage></StartPage>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </div>
  );
}
