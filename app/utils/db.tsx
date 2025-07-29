import mongoose from "mongoose";

const MONGODB_URI: any = process.env.MONGODB_URI;

export async function connectDB() {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
    await import("@/app/utils/models/user");
    await import("@/app/utils/models/stream");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}
