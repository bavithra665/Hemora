import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = ({ donors = [] }) => {
  return (
    <div className="homeContainer">
      <div className="heroSection">
        <h1 className="heroTitle">Donate Blood, Save Lives!</h1>
        <p className="heroSubtitle">
          Hemora connects blood donors with patients instantly during emergencies.
        </p>
        <Link to="/register" className="ctaButton">
          Become a Donor
        </Link>
      </div>
      
      <div className="aboutSection">
        <h2 className="aboutTitle1">About Hemora</h2>
        <p className="aboutText">
          Hemora is a trusted blood donation platform focused on saving lives.
          We ensure quick and reliable donor connections during emergencies.
        </p>
      </div>

      <div className="categorySection">
        <Link to="/register" className="cardContainer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
            alt="Donate Blood"
          />
          <h3>Donate Blood</h3>
        </Link>

        <Link to="/register" className="cardContainer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1032/1032762.png"
            alt="Request Blood"
          />
          <h3>Request Blood</h3>
        </Link>

        <Link to="/contact" className="cardContainer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png"
            alt="Emergency Support"
          />
          <h3>Emergency Support</h3>
        </Link>
      </div>

      <div className="titleRow">
        <h1 className="mainTitle">Donate Blood, Save Life!</h1>
        <div className="donorBadge">{donors.length} Donors</div>
      </div>

      <h3 className="subTitle">Top Donor List:</h3>
      <div className="cardWrapper">
        {donors.map((donor, index) => (
          <div className="donorCard" key={index}>
            <h4>{donor.name}</h4>
            <p>Blood Group: {donor.bloodGroup}</p>
            <p>City: {donor.city}</p>
            <p>Last Donation: {donor.lastDonation || "N/A"}</p>
          </div>
        ))}
      </div>

      <div className="ctaSection">
        <h2>SAVE LIFE</h2>
        <p>Login or Register to become a donor or request blood.</p>
        <div className="ctaButtons">
          <Link to="/login" className="ctaButton">Login</Link>
          <Link to="/register" className="ctaButton">Register</Link>
          <Link to="/contact" className="ctaButton">Emergency Contact</Link>
        </div>
      </div>

      <footer className="footer">
        <a>Bavi</a> © 2025 Hemora Blood Donation System — All Rights Reserved
      </footer>

    </div>
  );
};

export default Home;
