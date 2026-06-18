const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const donorRoutes = require("./Routes/userRoutes"); // rename variable for clarity

dotenv.config({ path: "./config.env" });

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ✅ Routes
app.use("/api/donors", donorRoutes); // all donor routes under /api/donors

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
