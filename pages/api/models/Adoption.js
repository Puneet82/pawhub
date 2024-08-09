import mongoose from "mongoose";

const adoptionSchema = mongoose.Schema({
  id: { type: String },
  pet: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Pet" },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  adoptedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Adoption", adoptionSchema);
