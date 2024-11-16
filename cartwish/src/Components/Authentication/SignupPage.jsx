import React, { useState } from "react";
import "./SignupPage.css";
import user from "../../assets/img/user.webp";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z
  .object({
    email: z.string().email({ message: "Please enter valid email" }),
    name: z
      .string()
      .min(3, { message: "Name should be at least 3 characters." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    cpassword: z.string(),
    address: z
      .string()
      .min(15, { message: "Address must be at least 15 characters." }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Confirm Password does not match Password",
    path: ["cpassword"],
  });
const SignupPage = () => {
  const [profilePic, setProfilePic] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (formData) => {
    console.log(formData);
  };
  console.log(profilePic);
  return (
    <section className="align-center form-page">
      <form
        className="authentication-form signup-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>SignUp Form</h2>

        <div className="image-input-section">
          <div className="image-preview">
            <img
              src={profilePic ? URL.createObjectURL(profilePic) : user}
              id="file-ip-1-preview"
            />
          </div>
          <label htmlFor="file-ip-1" className="image-label">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePic(e.target.files[0])}
            id="file-ip-1"
            className="image-input"
          />
        </div>

        {/* Form Inputs */}
        <div className="form-inputs signup-form-input">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form-text-input"
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />
            {errors.name && (
              <em className="form-error">{errors.name.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-text-input"
              type="email"
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
              id="password"
              className="form-text-input"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <em className="form-error">{errors.password.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              id="cpassword"
              className="form-text-input"
              type="password"
              placeholder="Enter confirm password"
              {...register("cpassword")}
            />
            {errors.cpassword && (
              <em className="form-error">{errors.cpassword.message}</em>
            )}
          </div>

          <div className="signup-textares-section">
            <label htmlFor="address">Delivery Address</label>
            <textarea
              id="address"
              className="input-textarea"
              placeholder="Enter delivery address"
              {...register("address")}
            />
            {errors.address && (
              <em className="form-error">{errors.address.message}</em>
            )}
          </div>
        </div>

        <button className="search-button form-submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SignupPage;

// name - Name should be at least 3 characters.
// email - Please enter valid email
// password - Password must be at least 8 characters.
// confirmPassword - Confirm Password does not match Password
// deliveryAddress - Address must be at least 15 characters.
