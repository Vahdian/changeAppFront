import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Add, Person } from "@material-ui/icons";
import "./Menu.scss";

export default function Menu() {
  return (
    <div className="navbarDiv">
      <NavLink to="/home" className="navbarDiv__item">
        <HomeIcon></HomeIcon>
      </NavLink>
      <NavLink to="/search" className="navbarDiv__item">
        <SearchIcon></SearchIcon>
      </NavLink>
      <NavLink to="/add" className="navbarDiv__item navbarDiv__item--add">
        <Add className="navbarDiv__item--plus"></Add>
      </NavLink>
      <NavLink to="/liked" className="navbarDiv__item">
        <FavoriteBorderIcon></FavoriteBorderIcon>
      </NavLink>
      <NavLink to="/profile" className="navbarDiv__item">
        <Person></Person>
      </NavLink>
    </div>
  );
}
