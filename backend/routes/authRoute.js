import { Router } from "express";

const AuthRouter = Router();

const { loginUser } = require("../controllers/authController.js");
//

AuthRouter.post("/login", loginUser);
export default AuthRouter;
