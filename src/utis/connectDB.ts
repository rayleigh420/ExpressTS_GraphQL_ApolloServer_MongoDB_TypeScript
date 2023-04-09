import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL!);
        console.log("Connected to DB");
    } catch (e: any) {
        console.log(e)
    }
}