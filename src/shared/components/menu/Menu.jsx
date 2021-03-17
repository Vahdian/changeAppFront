import React from "react";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PersonIcon from "@material-ui/icons/Person";
import { Add, Person } from "@material-ui/icons";

export default function Menu() {
  return (
    <div>
      <NavLink to="/home">
        <HomeIcon></HomeIcon>
      </NavLink>
      <NavLink to="/search">
        <SearchIcon></SearchIcon>
      </NavLink>
      <NavLink to="/add">
        <Add></Add>
      </NavLink>
      <NavLink to="/liked">
        <FavoriteBorderIcon></FavoriteBorderIcon>
      </NavLink>
      <NavLink to="/profile">
        <Person></Person>
      </NavLink>
    </div>
  );
}
