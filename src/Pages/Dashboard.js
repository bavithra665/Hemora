import React from "react";
import "../styles/Dashboard.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/* Sample Data – later replace with backend API */
const bloodData = [
  { name: "O+", value: 45 },
  { name: "A+", value: 30 },
  { name: "B+", value: 20 },
  { name: "AB+", value: 10 },
  { name: "O-", value: 8 },
  { name: "A-", value: 6 },
];

const donors = [
  { name: "Arun", blood: "O+", city: "Chennai", date: "12-08-2025" },
  { name: "Priya", blood: "A+", city: "Trichy", date: "08-08-2025" },
  { name: "Karthik", blood: "B+", city: "Madurai", date: "02-08-2025" },
  { name: "Meena", blood: "AB+", city: "Salem", date: "30-07-2025" },
  { name: "Suresh", blood: "O-", city: "Coimbatore", date: "28-07-2025" },
];

const COLORS = [
  "#cc0000",
  "#ff6666",
  "#ff9999",
  "#ff4d4d",
  "#990000",
  "#ff8080",
];

export default function Dashboard() {
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
              {donors.map((donor, index) => (
                <tr key={index}>
                  <td>{donor.name}</td>
                  <td>{donor.blood}</td>
                  <td>{donor.city}</td>
                  <td>{donor.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
