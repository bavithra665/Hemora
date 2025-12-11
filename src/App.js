import React from "react";
import { Outlet, Link } from "react-router-dom";
import donorData from "./searchdonor.json";

export default function App() {
  return (
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
        <Outlet context={donorData} /> 
      </main>
    </div>
  );
}
