import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        const MONGODB_URI = process.env.MONGODB_URI
        await mongoose.connect(MONGODB_URI)
    } catch (error) {
        throw new Error(error)
    }
}