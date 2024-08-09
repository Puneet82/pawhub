import express from "express";
import controller from "../controllers/index.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const router = express.Router();
router.get("/all", auth, admin, controller.getAllBookings);
// router.get("/all/:pet_id", auth, admin, controller.getAllBookingsByPet);
router.get("/all/:user_id", auth, controller.getAllBookingsByUser);
router.get("/all/status/:status", auth, admin, controller.getAllBookingsByStatus);
router.get("/:booking_id", auth, admin, controller.getBookingByID);
router.post("/add", auth, controller.createBooking);
router.patch("/edit/:id", auth, controller.updateBooking);
router.patch("/edit/status/:id", auth, admin, controller.updateBookingStatus);
router.patch("/edit/payment/:id", auth, controller.updateBookingPayment);
router.delete("/remove/:id", auth, controller.deleteBooking);

export default router;
