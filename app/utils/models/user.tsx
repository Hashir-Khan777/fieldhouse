import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    documentsverified: { type: Boolean, default: false },
    adultContent: { type: Boolean, default: false },
    profilePic: { type: String },
    banner: { type: String },
    bio: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
