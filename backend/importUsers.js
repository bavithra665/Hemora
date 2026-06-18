const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");
const fs = require("fs");
const User = require("./Models/User");

mongoose.connect(process.env.DB_URL)
  .then(async () => {
    console.log("MongoDB connected");

    let users = JSON.parse(fs.readFileSync("./data/User.json", "utf-8"));
    users = users.map(({ id, ...rest }) => rest);
    await User.deleteMany();
    await User.insertMany(users);
    console.log("User data imported successfully!");
    process.exit();
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
