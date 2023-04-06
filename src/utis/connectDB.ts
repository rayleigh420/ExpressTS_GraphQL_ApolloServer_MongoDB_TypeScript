import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const connectToDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://mongose:mongoose@jwt-typescript.0vvv3ul.mongodb.net/?retryWrites=true&w=majority');
        console.log("Connected to DB");
    } catch (e: any) {
        console.log(e)
    }
}