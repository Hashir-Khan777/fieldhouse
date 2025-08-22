import mongoose from "mongoose";

const streamSchema = new mongoose.Schema({
  streamer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, default: false },
  description: { type: String, default: false },
  joinees: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], default: [] },
}, { timestamps: true });

export default mongoose.models.Stream || mongoose.model("Stream", streamSchema);
