import React from "react";
import "../styles/Home.css";

const DonorCard = ({ donor }) => {
  return (
    <div className="donorCard">
      <h4>{donor.name}</h4>
      <p>Blood Group: {donor.bloodGroup}</p>
      <p>City: {donor.city}</p>
      <p>Last Donation: {donor.lastDonation || "N/A"}</p>
    </div>
  );
};

export default DonorCard;
