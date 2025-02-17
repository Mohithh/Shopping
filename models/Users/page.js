import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Ensure the model isn't redefined to avoid conflicts
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
