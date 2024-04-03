import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URI || "";
    await mongoose.connect(MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("DataBase cannot connect");
  }
};

export default connectMongoDB
