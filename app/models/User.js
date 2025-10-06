import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true, trim: true },
        password: { type: String, required: true, minlength: 6 },
        name: { type: String, required: true, trim: true },
        role: { type: String, enum: ["student", "admin"], required: true },
    },
    { timestamps: true } 
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
