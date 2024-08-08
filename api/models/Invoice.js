import mongoose from "mongoose";
import util from "../util/index.js";

const invoiceSchema = mongoose.Schema({
  id: { type: String },
  booking: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Booking" },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  service: [{ type: String, validate: (val) => util.validateService(val) }],
  amount: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Invoice", invoiceSchema);
