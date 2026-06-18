const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    bloodGroup: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    lastDonation: { type: Date }, // optional
  },
  { timestamps: true }
);

// Export as Donor model
module.exports = mongoose.model("Donor", donorSchema);
