import express from "express";
import "dotenv/config"
import cors from "cors"
import dbConnect from "./db/db.connect.js";
import { TodoRouter } from "./routers/router.js";




let port = process.env.APP_PORT || 5400
let host = process.env.APP_HOST || "localhost"

async function startAppServer() {
    try {
        const app = express()
        app.use(express.json())
        app.use(cors())
        await dbConnect()
        app.use(TodoRouter)
        console.log("Database is connected");
        app.listen(port, () => {
            console.log(`Server is running on http://${host}:${port}`);
        })
    } catch (err) {
        console.log(err.message);
    }
}
startAppServer()
