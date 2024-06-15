import { Schema, Document, Model, model } from "mongoose";
import { ISlot } from "./slot.interface";

interface TSlotDocument extends ISlot, Document {}
const slotSchema: Schema<TSlotDocument> = new Schema(
  {
    service: {
      type: Schema.Types.ObjectId,
      required: [true, "Service id required"],
      ref: "Service",
    },

    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: String,
      enum: ["available", "canceled", "booked"],
      default: "available",
    },
  },

  { timestamps: true }
);
const Slot: Model<TSlotDocument> = model<TSlotDocument>("Slot", slotSchema);
export default Slot;
