import { validatePhoneNumber, validateEmail, validateService, validateBookingStatus } from "./validation.js";
import { getOTP, mailSender } from "./otpService.js";

export default {
  validatePhoneNumber,
  validateEmail,
  validateBookingStatus,
  validateService,
  getOTP,
  mailSender,
};
