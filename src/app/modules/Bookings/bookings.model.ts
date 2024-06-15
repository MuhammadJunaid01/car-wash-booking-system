import { model, Model, Schema } from "mongoose";
import { ISlotBooking } from "./bookings.interface";

const slotBookingSchema: Schema<ISlotBooking> = new Schema(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    slot: {
      type: Schema.Types.ObjectId,
      ref: "Slot",
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    vehicleType: {
      type: String,
      enum: ["car", "bike", "truck"],
      required: true,
    },
    vehicleBrand: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
    manufacturingYear: {
      type: Number,
      required: true,
    },
    registrationPlate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SlotBooking: Model<ISlotBooking> = model<ISlotBooking>(
  "SlotBooking",
  slotBookingSchema
);

export default SlotBooking;
