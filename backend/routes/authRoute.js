import { Router } from "express";
import { Register, Login, Logout, Check } from "../controllers/authController.js";

const AuthRouter = Router();

AuthRouter.post("/register", Register);
AuthRouter.post("/login", Login);
AuthRouter.post("/logout", Logout)
AuthRouter.get("/check", Check)

export default AuthRouter;
