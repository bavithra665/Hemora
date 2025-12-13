import React from "react";
import { Link } from "react-router-dom";
import DonorCard from "../components/DonorCard";
import "../styles/Home.css";

const Home = ({ donors = [] }) => {
  return (
    <div className="homeContainer">
      
      <div className="titleRow">
        <h1 className="mainTitle">Donate Blood, Save Life!</h1>
        <div className="donorBadge">{donors.length} Donors</div>
      </div>

      <h3 className="subTitle">Top Donor List:</h3>
      <div className="cardWrapper">
        {donors.map((donor) => (
          <DonorCard key={donor.id} donor={donor} />
        ))}
      </div>

      <div className="ctaSection">
        <h2>SAVE LIFE</h2>
        <p>Login or Register to become a donor or request blood.</p>
        <div className="ctaButtons">
          <Link to="/login" className="ctaButton">Login</Link>
          <Link to="/register" className="ctaButton">Register</Link>
        </div>
      </div>

      <footer className="footer">
        © 2025 Hemora Blood Donation System — All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;
