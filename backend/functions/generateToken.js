import jwt from "jsonwebtoken";

const generateToken = (id) => {
  const Token = jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  return Token;
};

export default generateToken;
