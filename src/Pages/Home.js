import React from "react";
import { useOutletContext } from "react-router-dom";
import DonorCard from "../components/DonorCard";
import "../styles/Home.css";

const Home = () => {
  const donors = useOutletContext() || [];

  return (
    <div className="homeContainer">
      <div className="titleRow">
        <h1 className="mainTitle">Donate Blood, Save Life!</h1>

        <div className="donorBadge">
          {donors.length} Donors
        </div>
      </div>

      <h3 className="subTitle">Donor List:</h3>

      <div className="cardWrapper">
        {donors.map((donor) => (
          <DonorCard key={donor.id} donor={donor} />
        ))}
      </div>

      <footer className="footer">
        © 2025 Hemora Blood Donation System — All Rights Reserved
      </footer>

    </div>
  );
};

export default Home;
