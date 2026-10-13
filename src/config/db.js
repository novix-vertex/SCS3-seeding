import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongo db");

    }
    catch (error) {
        console.error("Error connecting to mongo db:", error);
    }
};

export default connectDB;

