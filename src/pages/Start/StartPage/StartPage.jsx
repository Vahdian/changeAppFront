import React from "react";
import "./StartPage.scss";
import Change from "../../../../src/assets/img/changeIcon.png";
import { Link } from "react-router-dom";
export default function StartPage() {
  return (
    <div className="startPage">
      <img src={Change} alt="" className="startPage__img"></img>
      <span className="startPage__text startPage__text--title">CHANGE</span>
      <span className="startPage__text startPage__text--bottom">
        Be the change the World Needs.
      </span>
      <Link to="/login">
        <button className="genericButton">START</button>
      </Link>
    </div>
  );
}
