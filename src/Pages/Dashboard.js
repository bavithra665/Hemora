import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#cc0000",
  "#ff6666",
  "#ff9999",
  "#ff4d4d",
  "#990000",
  "#ff8080",
];

export default function Dashboard() {
  const [donors, setDonors] = useState([]);
  const [bloodData, setBloodData] = useState([]);

  // 🔹 Fetch donors from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/donors") // ✅ corrected route
      .then((res) => {
        setDonors(res.data);
        generateBloodChart(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // 🔹 Generate pie chart data from donor list
  const generateBloodChart = (donorList) => {
    const bloodCount = {};

    donorList.forEach((donor) => {
      if (donor.bloodGroup) {
        bloodCount[donor.bloodGroup] =
          (bloodCount[donor.bloodGroup] || 0) + 1;
      }
    });

    const chartData = Object.keys(bloodCount).map((key) => ({
      name: key,
      value: bloodCount[key],
    }));

    setBloodData(chartData);
  };

  return (
    <div className="dashboardContainer">
      <div className="dashboardCard">
        <h1 className="dashboardTitle">Hemora Dashboard</h1>
        <p className="dashboardSubtitle">
          Blood Donation Statistics & Donor History
        </p>

        {/* Pie Chart Section */}
        <div className="chartSection">
          <h2 className="sectionTitle">Most Donated Blood Groups</h2>

          {bloodData.length === 0 ? (
            <p style={{ textAlign: "center" }}>No data available</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={bloodData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {bloodData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Donor Table Section */}
        <div className="tableSection">
          <h2 className="sectionTitle">All Donors Till Date</h2>

          <table className="donorTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Blood Group</th>
                <th>City</th>
                <th>Donation Date</th>
              </tr>
            </thead>
            <tbody>
              {donors.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No donors found
                  </td>
                </tr>
              ) : (
                donors.map((donor) => (
                  <tr key={donor._id}>
                    <td>{donor.name}</td>
                    <td>{donor.bloodGroup}</td>
                    <td>{donor.city}</td>
                    <td>
                      {donor.lastDonation
                        ? new Date(donor.lastDonation).toLocaleDateString()
                        : "—"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
