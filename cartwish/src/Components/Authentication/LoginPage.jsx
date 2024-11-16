import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email ID!" }).min(3),
  password: z
    .string()
    .min(8, { message: "Password should be atleast 8 characters!" }),
});
import "./LoginPage.css";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <section className="align-center form-page">
      <form className="authentication-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Form</h2>
        <div className="form-inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-text-input"
              placeholder="Enter your email address"
              {...register("email")}
            />
            {errors.email && (
              <em className="form-error">{errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-text-input"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <em className="form-error">{errors.password.message}</em>
            )}
          </div>
          <button type="submit" className="search-button form-submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
