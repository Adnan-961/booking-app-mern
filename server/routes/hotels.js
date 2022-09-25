import express from "express";
import Hotel from "../models/Hotel";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newHotel = new Hotel(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
});
export default router;
