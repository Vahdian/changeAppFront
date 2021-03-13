import React from "react";
import Change from "../../../src/assets/img/changeIcon.png";
import { Link } from "react-router-dom";
import "./Login.scss";
import { useForm } from "react-hook-form";
export default function Login() {
  return (
    <div>
      <div className="loginPage">
        <img src={Change} alt="" className="loginPage__img"></img>
        <h1 className="loginPage__title">Please remember us who are you!</h1>
        <form className="loginPage__form">
          <input className="loginPage__input" placeholder="Username"></input>
          <input
            className="loginPage__input"
            placeholder="Password"
            type="password"
          ></input>
        </form>
        <Link>
          <button className="genericButton2">Log In</button>
        </Link>
        <span className="loginPage__note">
          Don't have an account?
          <Link className="signUpLink">
            <span> Sign up</span>
          </Link>
        </span>
      </div>
    </div>
  );
}
