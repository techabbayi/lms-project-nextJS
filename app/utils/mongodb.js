// utils/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("⚠️ Please define MONGODB_URI in .env.local");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        const options = { bufferCommands: false };
        cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
            console.log("✅ MongoDB connected successfully");
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (err) {
        cached.promise = null;
        console.error("❌ MongoDB connection error:", err);
        throw err;
    }

    return cached.conn;
}

export default connectToDatabase;
