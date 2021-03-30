import React from "react";
import { Switch, Route } from "react-router";
import Login from "../../pages/Login/Login";
import Create from "../../pages/main/create/Create";
import Home from "../../pages/main/home/Home";
import Liked from "../../pages/main/liked/Liked";
import Profile from "../../pages/main/profile/Profile";
import Search from "../../pages/main/search/Search";
import Register from "../../pages/Register/Register";
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
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/profile">
          <Profile></Profile>
        </Route>
        <Route exact path="/search">
          <Search></Search>
        </Route>
        <Route exact path="/create">
          <Create></Create>
        </Route>
        <Route exact path="/liked">
          <Liked></Liked>
        </Route>
      </Switch>
    </div>
  );
}
