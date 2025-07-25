import express from "express";
import {
  createFounder,
  getAllFounders,
  getFounder,
  updateFounder,
  deleteFounder,
  reorderFounder,
} from "../controllers/FounderController.js";

const router = express.Router();

import imageHandler from "../middlewares/multer.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

router.post(
  "/new-founder",
  isAuthenticated,
  isAdmin,
  imageHandler.upload.single("image"),
  imageHandler.processImage,
  createFounder
);

router.put(
  "/:id",
  isAuthenticated,
  isAdmin,
  imageHandler.upload.single("image"),
  imageHandler.processImage,
  updateFounder
);

router.get("/all-founders", getAllFounders);

router.get("/:id", getFounder);

router.delete("/:id", isAuthenticated, isAdmin, deleteFounder);

router.patch("/reorder", isAuthenticated, isAdmin, reorderFounder);

export default router;
