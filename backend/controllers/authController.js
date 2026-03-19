import UserModel from "../models/userModel.js";
import pattern from "../enums/pattern.js";
import bcrypt from "bcrypt";
import generateToken from "../functions/generateToken.js";
import asyncHandler from "express-async-handler";

export const Register = async (req, res) => {
  const { username, email, password } = req.body;

  // Field validation \\
  if (username === null || email === null || password === null) {
    res.status(404).json({
      message: "Fill in missing fields",
    });
  }

  // Type assertion \\
  if (
    typeof username != "string" ||
    typeof email != "string" ||
    typeof password != "string"
  ) {
    res.status(404).json({
      message: "Invalid fields",
    });
  }

  if (username.length < 3) {
    res.status(404).json({
      message: "Username must be at least 3 characters long",
    });
  }

  if (password.length < 6) {
    res.status(404).json({
      message: "Password must be at least 6 characters long",
    });
  }

  // Email pattern assertion \\
  if (!pattern.EMAIL.test(email)) {
    res.status(404).json({
      message: "Email is invalid",
    });
  }

  // Username availability \\
  const UsernameUsed = await UserModel.findOne();

  const EmailUsed = await UserModel.findOne({ email });
  if (EmailUsed) {
    res.status(404).json({
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
};

// login
// POST
// route /users/login
// @access  Public

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    res.status(400);
    throw new Error("Invalid user credentials");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400);
    throw new Error("Invalid user credentials");
  }

  const Token = generateToken(User._id);

  res.cookie("token", Token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expiresIn: 7 * 24 * 60 * 1000,
  });

  res.status(200).json({
    _id: user.id,
    username: user.userName,
    email: user.userEmail,
    role: user.role,
    token: generateToken(user.id),
  });
});
