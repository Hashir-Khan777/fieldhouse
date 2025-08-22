import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    photo: { type: String, required: true },
    frontid: { type: String, required: true },
    backid: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Document ||
  mongoose.model("Document", documentSchema);
