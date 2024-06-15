import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import Service from "../Service/service.model";
import Slot from "../Slot/slot.model";
import User from "../User/user.model";
import { ISlotBooking } from "./bookings.interface";
import SlotBooking from "./bookings.model";
import { Types } from "mongoose";
export interface IPayload {
  serviceId: Types.ObjectId;
  slotId: Types.ObjectId;
  vehicleType: "car" | "bike" | "truck";
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
}
export const createBookingIntoDB = async (
  payload: IPayload,
  userId: string
) => {
  const {
    slotId,
    serviceId,
    vehicleBrand,
    vehicleModel,
    vehicleType,
    manufacturingYear,
    registrationPlate,
  } = payload;

  const [customer, serviceData, slotData] = await Promise.all([
    User.findById(userId),
    Service.findById(serviceId),
    Slot.findById(slotId),
  ]);
  if (!customer) {
    throw new AppError("user not found", httpStatus.NOT_FOUND);
  }
  if (!serviceData) {
    throw new AppError("service  not found", httpStatus.NOT_FOUND);
  }
  if (!slotData) {
    throw new AppError("slot  not found", httpStatus.NOT_FOUND);
  }
  const data: ISlotBooking = {
    slot: slotId,
    service: serviceId,
    customer: new Types.ObjectId(userId),
    vehicleType,
    vehicleBrand,
    vehicleModel,
    manufacturingYear,
    registrationPlate,
  };
  const booking = await SlotBooking.create(data);
  slotData.isBooked = "booked";
  await slotData.save();
  // eslint-disable-next-line
  const { customer: cus, slot, service, ...bookingData } = booking.toObject();

  const response = {
    customer,
    service: serviceData,
    slot: slotData,
    ...bookingData,
  };
  return response;
};
const getAllSlotBookingsFromDB = async () => {
  const response = await SlotBooking.find()
    .populate("service")
    .populate("slot")
    .populate("customer");

  return response;
};
export const BookingServices = {
  createBookingIntoDB,
  getAllSlotBookingsFromDB,
};
