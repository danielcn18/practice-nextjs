import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(provess.env.MONGO);
    } catch (err) {
        throw new Error("Connection failed!");
    }
}