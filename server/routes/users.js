import express from "express";
import { createHotel, deleteHotel, updateHotel,getHotel,getAllHotels } from "../controllers/hotel.js";
import User from "../models/Hotel.js";
const router = express.Router();

router.post("/", createHotel);

router.put("/:id",updateHotel);

router.delete("/:id", deleteHotel);
  
  router.get("/:id", getHotel);

    
    router.get("/", getAllHotels);
      


export default router;
