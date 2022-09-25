import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import roomRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";

dotenv.config();
const app = express();
const port = 9000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to MongoDB");
  } catch (err) {
    throw err;
  }
};
app.listen(port, () => {
  connect();
  console.log(`server started on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/auth", authRoute);
app.use("/rooms", roomRoute);
app.use("/hotels", hotelsRoute);
app.use("/users", usersRoute);
