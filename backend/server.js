import express from 'express'
import connectDB from './config/database.js'

import { configDotenv } from 'dotenv'
import AuthRouter from "./routes/authRoute.js"

// Main Application \\
const app = express()
app.use(express.json())

// ENV and DB Initialization \\
configDotenv()
connectDB()

// Routes \\
// Auth \\
app.use("/api/auth", AuthRouter)

// Listener \\
app.listen(process.env.PORT, () => {
    console.log(`Server Open (:${process.env.PORT})`)
})