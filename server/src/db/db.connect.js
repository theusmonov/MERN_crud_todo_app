import mongoose from "mongoose";
import "dotenv/config"


let db = process.env.APP_CONNECT_DB

async function dbConnect(){
    try {
        await mongoose.connect(db)
    } catch (err) {
        console.log(err.message);
    }
}

export default dbConnect