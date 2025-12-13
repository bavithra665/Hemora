import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    console.log("User Registered:", data);
    alert("🎉 Registration Successful!");
    reset(); 
    navigate("/login");
  };

  return (
    <div className="registerContainer">
      <div className="registerCard">
        <h1 className="registerTitle">User Registration</h1>
        <p className="registerSubtitle">
          Create an account to become a part of Hemora community ❤️
        </p>

        <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="formGroup">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && <p className="error">{errors.fullName.message}</p>}
          </div>

          <div className="formGroup">
            <label>Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="formGroup">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="10-digit phone number"
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>

          <div className="formGroup">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <div className="formGroup">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword", { required: "Confirm Password is required" })}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
          </div>

          <button type="submit" className="submitBtn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;