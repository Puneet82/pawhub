import mongoose from "mongoose";

const petSchema = mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true, trim: true },
  breed: { type: String, required: true, trim: true },
  type: { type: String, trim: true },
  desc: { type: String, trim: true },
  age: { type: String, required: true },
  imgurl: { type: String },
});

export default mongoose.model("Pet", petSchema);
