import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/consts/api.const";
import "./Register.scss";
import { Link } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    API.post("/register", data).then((res) => {
      console.log("OK");
    });
  };
  return (
    <div className="registerFormDiv">
      <h2>Let's change the world!</h2>
      <p>
        Become a better version of yourself just by filling this form and
        becoming a vigilante!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          placeholder="Introduce your email"
          ref={register({ required: true })}
        />
        <input
          name="name"
          placeholder="Introduce your name"
          ref={register({ required: true })}
        ></input>
        <p>Gender Identity</p>
        <select
          name="gender"
          ref={register({ required: true })}
          placeholder="Gender Identity"
        >
          <option value="volvo">Male</option>
          <option value="saab">Female</option>
          <option value="opel">Non-binary</option>
          <option value="volvo">Gender Fluid</option>
          <option value="saab">Agender</option>
          <option value="opel">Prefer not to say</option>
        </select>

        <input
          name="password"
          placeholder="Set a password for your account"
          ref={register({ required: true })}
          type="password"
        />
        <input
          name="passwordTwo"
          placeholder="Confirm your password"
          ref={register({ required: true })}
          type="password"
        />
        <Link to="/home">
          <input type="submit" value="Register" className="submitRegister" />
        </Link>
      </form>
    </div>
  );
}
