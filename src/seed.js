import dotenv from "dotenv";
import mongoose from "mongoose";
import movieModel from "./models/movie.model.js";
import { EJSON } from "bson";
import fs from "fs";

dotenv.config();

const seedMovies = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongo db");

        const movieData = fs.readFileSync("./data/sample_mflix.movies.json", "utf-8");

        const movies = EJSON.parse(movieData);

        await movieModel.insertMany(movies);
        console.log("Movies seeded successfully");

        await mongoose.connection.close();

    } catch (error) {
        console.log(error);
        mongoose.connection.close();
    }
}

seedMovies();