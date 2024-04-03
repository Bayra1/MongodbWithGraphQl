import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number
})

const userModel = mongoose.model("user", UserSchema)
export default userModel