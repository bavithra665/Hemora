import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const DonorCard = ({ donor }) => {
  const navigate = useNavigate();

  return (
    <div className="cardContainer" onClick={() => navigate("/donor-register")}>
      <img
        src={donor.image || require("../assets/donor.jpg")}
        alt={donor.name}
      />
      <h3>{donor.name}</h3>
      <p>Blood Group: {donor.bloodGroup}</p>
      <p>Last Donation: {donor.lastDonation}</p>
    </div>
  );
};

export default DonorCard;
