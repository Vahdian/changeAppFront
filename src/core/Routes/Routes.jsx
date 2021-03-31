import React from "react";
import { Switch, Route } from "react-router";
import LoginBoard from "../../pages/Login/LoginBoard";
import Create from "../../pages/main/create/Create";
import Home from "../../pages/main/home/Home";
import Liked from "../../pages/main/liked/Liked";
import Profile from "../../pages/main/profile/Profile";
import Search from "../../pages/main/search/Search";
import Register from "../../pages/Register/Register";
import StartPage from "../../pages/Start/StartPage/StartPage";
import Menu from "../../shared/components/menu/Menu";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <StartPage></StartPage>
        </Route>
        <Route exact path="/board">
          <LoginBoard></LoginBoard>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route exact path="/home">
          <Menu></Menu>
          <Home></Home>
        </Route>
        <Route exact path="/profile">
          <Menu></Menu>
          <Profile></Profile>
        </Route>
        <Route exact path="/search">
          <Menu></Menu>
          <Search></Search>
        </Route>
        <Route exact path="/create">
          <Menu></Menu>
          <Create></Create>
        </Route>
        <Route exact path="/liked">
          <Menu></Menu>
          <Liked></Liked>
        </Route>
      </Switch>
    </div>
  );
}
