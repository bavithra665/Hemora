import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="aboutContainer">

      <div className="aboutHero">
        <h1 className="aboutTitle">About Hemora</h1>
        <p className="aboutSubtitle">
          Hemora is a trusted platform connecting blood donors with patients instantly. Our mission is to save lives, one donation at a time.
        </p>
      </div>

      <div className="aboutContent">
        <section className="section">
          <h2>Our Mission</h2>
          <p>
            To provide a reliable platform for blood donations, ensuring that every patient in need receives timely help.
          </p>
        </section>

        <section className="section">
          <h2>Our Vision</h2>
          <p>
            To build a community of compassionate donors and volunteers who actively save lives.
          </p>
        </section>

        <section className="section">
          <h2>Why Donate Blood?</h2>
          <ul>
            <li>Each donation can save up to 3 lives.</li>
            <li>Blood cannot be manufactured; it must come from donors.</li>
            <li>Promotes health awareness and strengthens community bonds.</li>
          </ul>
        </section>

        <section className="section stats">
          <h2>Our Achievements</h2>
          <div className="statsGrid">
            <div className="statCard">
              <h3>500+</h3>
              <p>Registered Donors</p>
            </div>
            <div className="statCard">
              <h3>1200+</h3>
              <p>Successful Donations</p>
            </div>
            <div className="statCard">
              <h3>24/7</h3>
              <p>Emergency Support</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="aboutFooter">
        © 2025 Hemora Blood Donation System — All Rights Reserved
      </footer>

    </div>
  );
}
