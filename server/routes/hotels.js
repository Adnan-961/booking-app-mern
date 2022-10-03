import express from "express";
import {
  createHotel,
  deleteHotel,
  updateHotel,
  getHotel,
  getAllHotels,
  countByCity,
  countByType,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
const router = express.Router();
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
router.post("/", createHotel);

router.put("/:id", verifyAdmin, updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/find/:id", getHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

router.get("/", getAllHotels);

export default router;
