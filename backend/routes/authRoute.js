import { Router } from "express"
import { Register } from "../controllers/authController.js"

const AuthRouter = Router()

// Registration \\
AuthRouter.post("/register", Register)

export default AuthRouter