import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Authenticate here");
});
router.get("/register", (req, res) => {
  res.send("Register here");
});

export default router;
