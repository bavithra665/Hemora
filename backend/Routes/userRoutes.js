const express = require("express");
const Donor = require("../Models/Donor"); 
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const donor = await Donor.create(req.body); 
    res.status(201).json(donor);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message }); 
  }
});

router.get("/", async (req, res) => {
  try {
    const donors = await Donor.find().sort({ createdAt: -1 });
    res.status(200).json(donors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
