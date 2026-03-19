const asyncHandler = require("express-async-handler");
const bcryptjs = require("bcryptjs");
const generateToken = require("../functions/generateToken.js");
const User = require("../models/userModel.js");

// login
// POST
// route /users/login
// @access  Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ userEmail: email });
  if (!user) {
    res.status(400);
    throw new Error("Invalid user credentials");
  }
  const isMatch = await bcryptjs.compare(password, user.password);

  if (!isMatch) {
    res.status(400);
    throw new Error("Invalid user credentials");
  }
  res.status(200).json({
    _id: user.id,
    userName: user.userName,
    userEmail: user.userEmail,
    role: user.role,
    token: generateToken(user.id),
  });
});

module.exports = {
  loginUser,
};
