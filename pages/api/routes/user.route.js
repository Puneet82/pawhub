import express from "express";
import controller from "../controllers/index.js";

const router = express.Router();
router.post("/signup", controller.signup);
router.post("/otp", controller.getOTP);
router.post("/signin", controller.signin);
router.post("/signin/google", controller.signinGoogle);
router.patch("/update/profile", controller.updateProfile);

export default router;
