import React from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          placeholder="Introduce your name"
          ref={register({ required: true })}
        ></input>
        <input
          name="email"
          placeholder="Introduce your email"
          ref={register({ required: true })}
        />
        <input
          name="password"
          placeholder="Introduce your email"
          ref={register({ required: true })}
          type="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
