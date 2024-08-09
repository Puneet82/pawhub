import { signup, signin, getUsers, getUserById, signinGoogle, updateProfile, getOTP } from "./user.controller.js";
import {
  addPetInfo,
  deletePetInfo,
  getAllPets,
  getAllPetsByType,
  getPetById,
  updatePetInfo,
} from "./pet.controller.js";
import {
  getAllBookings,
  // getAllBookingsByPet,
  getBookingByID,
  getAllBookingsByStatus,
  getAllBookingsByUser,
  createBooking,
  updateBookingPayment,
  updateBooking,
  updateBookingStatus,
  deleteBooking,
} from "./booking.controller.js";

import { sendNewsLetter } from "./newsletter.controller.js";

export default {
  signup,
  signin,
  signinGoogle,
  getUsers,
  getOTP,
  getUserById,
  updateProfile,
  getAllPets,
  getAllPetsByType,
  getPetById,
  addPetInfo,
  updatePetInfo,
  deletePetInfo,
  getAllBookings,
  // getAllBookingsByPet,
  getAllBookingsByStatus,
  getBookingByID,
  getAllBookingsByUser,
  updateBookingPayment,
  createBooking,
  updateBooking,
  updateBookingStatus,
  deleteBooking,
  sendNewsLetter,
};
