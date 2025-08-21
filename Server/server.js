import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import authRoute from "./route/auth.js"

const app = express();
dotenv.config();

const PORT = 5000

app.use(express.json())

app.use(cors({
    origin: `${process.env.BASEURL}`
}))

app.use("/api/auth", authRoute)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})