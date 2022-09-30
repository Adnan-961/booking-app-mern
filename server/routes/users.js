import express from "express";
import { deleteUser,updatedUser,getUser,getAllUsers } from "../controllers/user.js";
import User from "../models/User.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/check",verifyToken,(req,res,next)=>{
//   res.send("Logged in")
// });

// router.get("/checkUser/:id",verifyUser,(req,res,next)=>{
//   res.send("Logged in and can delete acc")
// });


// router.get("/checkAdmin/:id",verifyAdmin,(req,res,next)=>{
//   res.send("Logged in as Admin")
// });


router.put("/:id",verifyUser,updatedUser);

router.delete("/:id",verifyUser, deleteUser);
  
router.get("/:id",verifyUser, getUser);

    
router.get("/",verifyAdmin,getAllUsers);
      


export default router;
