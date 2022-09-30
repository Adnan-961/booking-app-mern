import express from "express";
import { createHotel, deleteHotel, updateHotel,getHotel,getAllHotels } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
const router = express.Router();
import {verifyAdmin,verifyUser} from "../utils/verifyToken.js"
router.post("/", createHotel);

router.put("/:id",verifyAdmin,updateHotel);

router.delete("/:id",verifyAdmin, deleteHotel);
  
router.get("/:id", getHotel);

    
router.get("/", getAllHotels);
      


export default router;
