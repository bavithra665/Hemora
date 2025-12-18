import React, { useState } from "react";
import "../styles/SearchDonor.css";

export default function SearchDonor({ donorData = [] }) {
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  // Filter donors based on blood group, city, and state
  const filteredDonors = donorData.filter((donor) => {
    return (
      (bloodGroup === "" || donor.bloodGroup === bloodGroup) &&
      (city === "" || donor.city?.toLowerCase().includes(city.toLowerCase())) &&
      (state === "" || donor.state?.toLowerCase().includes(state.toLowerCase()))
    );
  });

  return (
    <div className="searchDonorContainer">
      <h1 className="searchTitle">Find a Blood Donor</h1>
      <p className="searchSubtitle">
        Search donors by blood group and location (city/state)
      </p>

      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="searchInput"
        >
          <option value="">Select Blood Group</option>
          <option value="O+">O+</option>
  <option value="O-">O-</option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B-">B-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>

  <option value="A1+">A1+</option>
  <option value="A1-">A1-</option>
  <option value="A2+">A2+</option>
  <option value="A2-">A2-</option>

  <option value="Bombay">Bombay (hh)</option>
  <option value="A1B+">A1B+</option>
  <option value="A1B-">A1B-</option>
  <option value="A2B+">A2B+</option>
  <option value="A2B-">A2B-</option>

  <option value="O+ Weak D">O+ Weak D</option>
  <option value="O- Weak D">O- Weak D</option>
        </select>

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="searchInput"
        />

        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="searchInput"
        />
      </form>

      <div className="donorCardsContainer">
        {filteredDonors.length > 0 ? (
          filteredDonors.map((donor) => (
            <div key={donor.id} className="donorCard">
              <h3>{donor.name}</h3>
              <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
              <p><strong>City:</strong> {donor.city}</p>
              <p><strong>State:</strong> {donor.state}</p>
              <p><strong>Last Donation:</strong> {donor.lastDonation}</p>
               <p><strong>Phone:</strong> {donor.phone}</p>
              <p><strong>Email:</strong> {donor.email}</p>
            </div>
          ))
        ) : (
          <p className="noResult">No donors found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}
