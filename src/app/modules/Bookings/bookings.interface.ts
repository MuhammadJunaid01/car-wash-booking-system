import { Types } from "mongoose";

export interface ISlotBooking {
  service: Types.ObjectId;
  slot: Types.ObjectId;
  customer: Types.ObjectId;
  vehicleType: "car" | "bike" | "truck";
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
}
