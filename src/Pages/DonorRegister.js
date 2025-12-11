import React, { useState } from "react";
import "../styles/DonorRegister.css";

const DonorRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    lastDonation: "",
    medicalConditions: "",
    emergencyName: "",
    emergencyPhone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Donor Registered:", formData);

    alert("🎉 Donor Registered Successfully!");

    setFormData({
      name: "",
      age: "",
      gender: "",
      bloodGroup: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      lastDonation: "",
      medicalConditions: "",
      emergencyName: "",
      emergencyPhone: "",
    });
  };

  return (
    <div className="regContainer">

      <div className="regCard">

        <h1 className="regTitle">Donor Registration Form</h1>
        <p className="regSubtitle">
          Please fill the details carefully to become a life saver ❤️
        </p>

        <form className="regForm" onSubmit={handleSubmit}>
          
          <div className="formGroup">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formRow">
            <div className="formGroup half">
              <label>Age</label>
              <input
                type="number"
                name="age"
                placeholder="18+"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formGroup half">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="formGroup">
            <label>Blood Group</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
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
          </div>

          <div className="formGroup">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="10-digit phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formGroup">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formGroup">
            <label>Address</label>
            <textarea
              name="address"
              placeholder="Enter full address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="formRow">
            <div className="formGroup half">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formGroup half">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="formGroup">
            <label>Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formGroup">
            <label>Last Donation Date</label>
            <input
              type="date"
              name="lastDonation"
              value={formData.lastDonation}
              onChange={handleChange}
            />
          </div>

          <div className="formGroup">
            <label>Medical Conditions</label>
            <textarea
              name="medicalConditions"
              placeholder="Any allergies, illness, etc."
              value={formData.medicalConditions}
              onChange={handleChange}
            ></textarea>
          </div>

          <h3 className="emergencyHeading">Emergency Contact</h3>

          <div className="formGroup">
            <label>Contact Name</label>
            <input
              type="text"
              name="emergencyName"
              placeholder="Guardian or family member"
              value={formData.emergencyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formGroup">
            <label>Contact Phone</label>
            <input
              type="text"
              name="emergencyPhone"
              placeholder="Emergency contact number"
              value={formData.emergencyPhone}
              onChange={handleChange}
              required
            />
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
