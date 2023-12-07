import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema(
    {
        name: {
            type: String, 
            unique: true,
            required: true,
        },
        emial: {
            type: String,
            unqiue: true,
            required: true, 
        },
        password: {
            type: String, 
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// if the user collection does not exist, create a new one.
export default mongoose.models.User || mongoose.model("User", userSchema);