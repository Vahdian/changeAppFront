import React from "react";
import "./StartPage.scss";
import { Link } from "react-router-dom";
export default function StartPage() {
  return (
    <div className="startPage">
      <img
        src="https://lh3.googleusercontent.com/proxy/owQSE8IBbsUSejQjrKeEUCEbXMo44q2JLAKCW4yJvJXS2Ju2g2lZQ9XUYU78czEbP_Fti1gu1WXs1QgiSjQFiSc-KCiEK3HBfe3n2YacXosia8wjf9CzeazuCs8N7vr7OQHU5BPqkg"
        alt=""
        className="startPage__img"
      ></img>
      <span className="startPage__text startPage__text--title">JUSTICE</span>
      <span className="startPage__text startPage__text--bottom">
        Be the change the World Needs.
      </span>
      <Link to="/login">
        <button className="genericButton">START</button>
      </Link>
    </div>
  );
}
