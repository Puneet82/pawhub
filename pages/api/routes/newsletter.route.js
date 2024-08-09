import express from "express";
import controller from "../controllers/index.js";

const router = express.Router();
router.post("/send", controller.sendNewsLetter);

export default router;
