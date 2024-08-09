import mongoose from "mongoose";
import util from "../util/index.js";
import { STATUS } from "../constants/statuses.js";
import model from "./index.js";

const bookingSchema = mongoose.Schema({
  id: { type: String },
  // pet: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Pet" },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  service: { type: String, validate: (val) => util.validateService(val) },
  status: { type: String, default: STATUS.NEW, validate: (val) => util.validateBookingStatus(val) },
  appointmentOn: { type: Date, default: Date.now, required: true },
  createdAt: { type: Date, default: Date.now },
  paymentStatus: { type: String, default: "PENDING" },
});

// module to send email
async function sendVerificationEmail(email) {
  try {
    const mailResponse = await util.mailSender(
      email,
      "Booking confirmation Email - Pawsitivity",
      `<p>Hi, Thanks for making a booking appointment with us. Our team will reach out shortly.</p>`
    );
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}

bookingSchema.pre("save", async function (next) {
  if (this.isNew) {
    const userInfo = await model.User.findById({ _id: this.user });
    await sendVerificationEmail(userInfo.email);
  }
  next();
});

export default mongoose.model("Booking", bookingSchema);
