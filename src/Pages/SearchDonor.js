import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import donorData from "../searchdonor.json"; 

export default function SearchDonor() {
  const { bloodGroup } = useParams();
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    if (bloodGroup) {
      const filtered = donorData.filter(
        (donor) => donor.bloodGroup.toUpperCase() === bloodGroup.toUpperCase()
      );
      setDonors(filtered);
    } else {
      setDonors(donorData);
    }
  }, [bloodGroup]);

  return (
    <div>
      <h1>Search Donor</h1>
      {bloodGroup && <h2>Showing donors with blood group: {bloodGroup}</h2>}
      <ul>
        {donors.map((donor) => (
          <li key={donor.id}>
            {donor.name} - {donor.bloodGroup} - Last Donation: {donor.lastDonation}
          </li>
        ))}
      </ul>
    </div>
  );
}
