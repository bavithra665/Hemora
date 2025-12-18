import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import donorData from "./searchdonor.json";
import "./App.css";

/* Pages */
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DonorRegister from "./Pages/DonorRegister";
import SearchDonor from "./Pages/SearchDonor";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact";

/* Auth */
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext } from "./context/AuthContext";

export default function App() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <Router>
      <div>

        {/* HEADER */}
        <header className="header">
          <h1>Hemora</h1>

          <nav className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            {/* NOT LOGGED IN */}
            {!isLoggedIn && <Link to="/login">Login</Link>}
            {!isLoggedIn && <Link to="/register">Register</Link>}

            {/* LOGGED IN */}
            {isLoggedIn && <Link to="/donor-register">Donor Register</Link>}
            {isLoggedIn && <Link to="/search-donor">Search Donor</Link>}
            {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
            {isLoggedIn && <Link to="/contact">Emergency Contact</Link>}

            {isLoggedIn && (
              <button className="logoutBtn" onClick={logout}>
                Logout
              </button>
            )}
          </nav>
        </header>

        {/* ROUTES */}
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home donors={donorData} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* PROTECTED ROUTES */}
            <Route
              path="/donor-register"
              element={
                <ProtectedRoute>
                  <DonorRegister />
                </ProtectedRoute>
              }
            />

            <Route
              path="/search-donor"
              element={
                <ProtectedRoute>
                  <SearchDonor donorData={donorData} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}
