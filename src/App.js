import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import donorData from "./searchdonor.json";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DonorRegister from "./Pages/DonorRegister";
import SearchDonor from "./Pages/SearchDonor";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  return (
    <Router>
      <div>
       
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            background: "#f2f2f2",
          }}
        >
          <h1 style={{ margin: 0 }}>Hemora</h1>
          <nav>
            <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
            <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
            <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
            <Link to="/register" style={{ margin: "0 10px" }}>Register</Link>
            <Link to="/donor-register" style={{ margin: "0 10px" }}>Donor Register</Link>
            <Link to="/search-donor" style={{ margin: "0 10px" }}>Search Donor</Link>
            <Link to="/dashboard" style={{ margin: "0 10px" }}>Dashboard</Link>
          </nav>
        </header>

        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home donors={donorData} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/donor-register" element={<DonorRegister />} />
            <Route path="/search-donor" element={<SearchDonor donorData={donorData} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
