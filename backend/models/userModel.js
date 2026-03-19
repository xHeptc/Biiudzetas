import mongoose from "mongoose"
import role from "../enums/role.js"

const UserSchema = mongoose.Schema({
     username: { type: String, min: 3, required: true },
     email: { type: String, unique: true, required: true },
     password: { type: String, required: true },
     role: { type: String, default: role.USER }
}, { timestamps: true })

const UserModel = mongoose.model("User", UserSchema)
export default UserModel