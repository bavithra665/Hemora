import React from "react";
import { useForm } from "react-hook-form";
import "../styles/DonorRegister.css";

const DonorRegister = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Donor Registered:", data);
    alert("🎉 Donor Registered Successfully!");
    reset();
  };

  return (
    <div className="regContainer">
      <div className="regCard">
        <h1 className="regTitle">Donor Registration Form</h1>
        <p className="regSubtitle">
          Please fill the details carefully to become a life saver ❤️
        </p>

        <form className="regForm" onSubmit={handleSubmit(onSubmit)}>

          <div className="formGroup">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="formRow">
            <div className="formGroup half">
              <label>Age</label>
              <input
                type="number"
                placeholder="18+"
                {...register("age", { required: "Age is required", min: 18 })}
              />
              {errors.age && <p className="error">{errors.age.message}</p>}
            </div>

            <div className="formGroup half">
              <label>Gender</label>
              <select {...register("gender", { required: "Gender is required" })}>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {errors.gender && <p className="error">{errors.gender.message}</p>}
            </div>
          </div>

          <div className="formGroup">
            <label>Blood Group</label>
            <select {...register("bloodGroup", { required: "Blood group is required" })}>
              <option value="">Select blood group</option>
              <option>O+</option>
              <option>O-</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
            {errors.bloodGroup && <p className="error">{errors.bloodGroup.message}</p>}
          </div>

          <div className="formGroup">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="10-digit phone number"
              {...register("phone", { required: "Phone is required", minLength: 10, maxLength: 10 })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
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
            <label>Address</label>
            <textarea
              placeholder="Enter full address"
              {...register("address", { required: "Address is required" })}
            ></textarea>
            {errors.address && <p className="error">{errors.address.message}</p>}
          </div>

          <div className="formRow">
            <div className="formGroup half">
              <label>City</label>
              <input
                type="text"
                {...register("city", { required: "City is required" })}
              />
              {errors.city && <p className="error">{errors.city.message}</p>}
            </div>

            <div className="formGroup half">
              <label>State</label>
              <input
                type="text"
                {...register("state", { required: "State is required" })}
              />
              {errors.state && <p className="error">{errors.state.message}</p>}
            </div>
          </div>

          <div className="formGroup">
            <label>Pincode</label>
            <input
              type="text"
              {...register("pincode", { required: "Pincode is required" })}
            />
            {errors.pincode && <p className="error">{errors.pincode.message}</p>}
          </div>

          <div className="formGroup">
            <label>Last Donation Date</label>
            <input type="date" {...register("lastDonation")} />
          </div>

          <div className="formGroup">
            <label>Medical Conditions</label>
            <textarea placeholder="Any allergies, illness, etc." {...register("medicalConditions")}></textarea>
          </div>

          <h3 className="emergencyHeading">Emergency Contact</h3>
          <div className="formGroup">
            <label>Contact Name</label>
            <input
              type="text"
              placeholder="Guardian or family member"
              {...register("emergencyName", { required: "Emergency name is required" })}
            />
            {errors.emergencyName && <p className="error">{errors.emergencyName.message}</p>}
          </div>

          <div className="formGroup">
            <label>Contact Phone</label>
            <input
              type="text"
              placeholder="Emergency contact number"
              {...register("emergencyPhone", { required: "Emergency phone is required" })}
            />
            {errors.emergencyPhone && <p className="error">{errors.emergencyPhone.message}</p>}
          </div>

          <button type="submit" className="submitBtn">Register Donor</button>
        </form>
      </div>
    </div>
  );
};

export default DonorRegister;
