import mongoose from "mongoose";

const { schema } = mongoose;

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
    },
    maxPeople: {
      type: Number,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },

  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
