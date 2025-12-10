import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DonorRegister from "./Pages/DonorRegister";
import SearchDonor from "./Pages/SearchDonor";
import Dashboard from "./Pages/Dashboard";

const routerVariables = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/donor-register", element: <DonorRegister /> },
      { path: "/search-donor", element: <SearchDonor /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "*", element: <h1>Page Not Found</h1> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerVariables} />
  </React.StrictMode>
);
