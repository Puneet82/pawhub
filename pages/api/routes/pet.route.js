import express from "express";
import controller from "../controllers/index.js";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const router = express.Router();
router.get("/all", auth, controller.getAllPets);
router.get("/all/:type", auth, controller.getAllPetsByType);
router.get("/:id", auth, controller.getPetById);
router.post("/add", auth, admin, controller.addPetInfo);
router.patch("/edit/:id", auth, admin, controller.updatePetInfo);
router.delete("/remove/:id", auth, admin, controller.deletePetInfo);

export default router;
