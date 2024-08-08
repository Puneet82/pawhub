import mongoose from "mongoose";
import util from "../util/index.js";

const subSchema = mongoose.Schema({
  id: { type: String },
  email: { type: String, required: true, unique: true, trim: true, validate: (val) => util.validateEmail(val) },
});

// module to send email
async function sendVerificationEmail(email) {
  try {
    const mailResponse = await util.mailSender(
      email,
      "Email Subscription Confirmation - Pawsitivity",
      `<p>Welcome to the Pawsitivity newsletter edition. Our team will reach out to you shortly.</p>`
    );
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}

subSchema.pre("save", async function (next) {
  if (this.isNew) {
    await sendVerificationEmail(this.email);
  }
  next();
});

export default mongoose.model("Subscriber", subSchema);
