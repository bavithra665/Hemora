import React from "react";
import { useForm } from "react-hook-form";
import "../styles/DonorRegister.css";

const DonorRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/api/donors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        lastDonation: data.lastDonation || null,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then(() => {
        alert("🎉 Donor registered successfully!");
        reset(); 
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Registration failed!");
      });
  };

  return (
    <div className="regContainer">
      <div className="regCard">
        <h1 className="regTitle">Donor Registration</h1>
        <p className="regSubtitle">Become a life saver ❤️</p>

        <form className="regForm" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="formGroup">
            <label>Name</label>
            <input
              type="text"
              placeholder="Full name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          {/* Age */}
          <div className="formGroup">
            <label>Age</label>
            <input
              type="number"
              placeholder="18+"
              {...register("age", {
                required: "Age is required",
                min: { value: 18, message: "Must be 18+" },
              })}
            />
            {errors.age && <p className="error">{errors.age.message}</p>}
          </div>

          {/* Blood Group */}
          <div className="formGroup">
            <label>Blood Group</label>
            <select
              {...register("bloodGroup", { required: "Blood group required" })}
            >
              <option value="">Select</option>
              <option>O+</option>
              <option>O-</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
            {errors.bloodGroup && (
              <p className="error">{errors.bloodGroup.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="formGroup">
            <label>Phone</label>
            <input
              type="text"
              placeholder="10-digit number"
              {...register("phone", {
                required: "Phone required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter valid 10-digit number",
                },
              })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>

          {/* City */}
          <div className="formGroup">
            <label>City</label>
            <input
              type="text"
              {...register("city", { required: "City required" })}
            />
            {errors.city && <p className="error">{errors.city.message}</p>}
          </div>

          {/* State */}
          <div className="formGroup">
            <label>State</label>
            <input
              type="text"
              placeholder="State"
              {...register("state", { required: "State required" })}
            />
            {errors.state && <p className="error">{errors.state.message}</p>}
          </div>

          {/* Last Donation */}
          <div className="formGroup">
            <label>Last Donation Date (optional)</label>
            <input type="date" {...register("lastDonation")} />
          </div>

          <button type="submit" className="submitBtn">
            Register Donor
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonorRegister;
