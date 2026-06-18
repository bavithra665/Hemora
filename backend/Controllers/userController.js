const User = require("../Models/User");

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await User.create(userData);
    res.status(201).json({
      message: "User registered successfully",
      user: newUser
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser };
