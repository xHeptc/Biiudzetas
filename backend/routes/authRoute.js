import { Router } from "express";
import { Register, loginUser } from "../controllers/authController.js";

const AuthRouter = Router();

AuthRouter.post("/register", Register);
AuthRouter.post("/login", loginUser);
export default AuthRouter;
