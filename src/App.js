import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="header">
        <div className="logo">
          <img src="https://via.placeholder.com/40x20" alt="Logo" />
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/donor-register">Donor Register</Link>
          <Link to="/search-donor">Search Donor</Link>
          <Link to="/dashboard">Dashboard</Link>
         
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
