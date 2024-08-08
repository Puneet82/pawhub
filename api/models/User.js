import mongoose from "mongoose";
import util from "../util/index.js";

const userSchema = mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true, validate: (val) => util.validateEmail(val) },
  phone: { type: String, trim: true, unique: true, validate: (val) => util.validatePhoneNumber(val) },
  isAdmin: { type: Boolean, default: false },
  password: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
