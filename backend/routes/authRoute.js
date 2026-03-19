import { Router } from "express";
import { Register, Login, Logout } from "../controllers/authController.js";

const AuthRouter = Router();

AuthRouter.post("/register", Register);
AuthRouter.post("/login", Login);
AuthRouter.post("/logout", Logout)

export default AuthRouter;
