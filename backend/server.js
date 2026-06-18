// server.js

// ✅ Import required packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

// ✅ Initialize Express
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // To parse JSON requests

// ✅ Routes
// Make sure you have Routes/userRoutes.js file
app.use("/api/donors", require("./Routes/userRoutes"));

// ✅ MongoDB connection (Localhost)
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/hemora";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of waiting forever
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) =>
    console.error("❌ MongoDB connection error:", err.message)
  );

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
