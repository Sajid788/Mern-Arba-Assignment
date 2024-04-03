const asyncHandler = require("express-async-handler");
require("dotenv").config();
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/user_model");
const jwt = require("jsonwebtoken");

// Register a new user
const userRegister = asyncHandler(async (req, res) => {
  const { fullName, userName, email, password, picture } = req.body;

  if (!fullName || !userName || !email || !password) {
    return res.status(400).json({ error: "Please provide all the details" });
  }

  // Check if the user already exists
  const isUserExists = await UserModel.findOne({ email });
  if (isUserExists) {
    return res.status(400).json({ error: "User Already Exists" });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS)
    );

    // Create a new user
    const newUser = new UserModel({
      fullName,
      userName,
      email,
      password: hashedPassword,
      picture,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    const userResponse = savedUser.toObject();
    delete userResponse.password;

    res.status(200).json(userResponse);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
});

module.exports = {
  userRegister,
};
