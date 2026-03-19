import UserModel from "../models/userModel.js";
import pattern from "../enums/pattern.js";
import bcrypt from "bcrypt";
import generateToken from "../functions/generateToken.js";
import asyncHandler from "express-async-handler";

// Register
// POST
// /auth/register
// @access Public
export const Register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Field validation \\
  if (username === null || email === null || password === null) {
    return res.status(400).json({
      message: "Fill in missing fields",
    });
  }

  // Type assertion \\
  if (
    typeof username != "string" ||
    typeof email != "string" ||
    typeof password != "string"
  ) {
    return res.status(400).json({
      message: "Invalid fields",
    });
  }

  if (username.length < 3) {
    return res.status(400).json({
      message: "Username must be at least 3 characters long",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters long",
    });
  }

  // Email pattern assertion \\
  if (!pattern.EMAIL.test(email)) {
    return res.status(400).json({
      message: "Email is invalid",
    });
  }

  // Username availability \\
  const UsernameUsed = await UserModel.findOne();

  const EmailUsed = await UserModel.findOne({ email });
  if (EmailUsed) {
    return res.status(400).json({
      message: "Account with this email already exists",
    });
  }

  // Password Hashing \\
  const Salt = await bcrypt.genSalt(10);
  const HashedPassword = await bcrypt.hash(password, Salt);

  const User = new UserModel({
    username,
    email,
    password: HashedPassword,
  });

  const Token = generateToken(User._id);

  res.cookie("token", Token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expiresIn: 7 * 24 * 60 * 1000,
  });

  await User.save();

  return res.status(201).json({
    id: User._id,
    username,
    email,
    role: User.role,
  });
});

// Login
// POST
// route /auth/login
// @access Public
export const Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials"
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid credentials"
    });
  }

  const Token = generateToken(user._id);

  res.cookie("token", Token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expiresIn: 7 * 24 * 60 * 1000,
  });

  return res.status(200).json({
    _id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  });
});

// Logout
// POST
// /auth/logout
// @access Public
export const Logout = asyncHandler(async (req, res) => {
  res.clearCookie("token", { path: "/" })
  res.send();
})

