import { Response } from "express";
import catchAsync from "../../../lib/middlewares/catchAsync";
import { CustomRequest } from "../../interfaces";
import { BookingServices } from "./bookings.service";
import sendResponse from "../../../lib/utils/sendResponse";
import httpStatus from "http-status";

const createSlotBooking = catchAsync(
  async (req: CustomRequest, res: Response) => {
    const data = await BookingServices.createBookingIntoDB(
      req.body,
      req.user as string
    );
    sendResponse(res, {
      message: "Booking successful",
      statusCode: httpStatus.OK,
      data,
    });
  }
);
const getAllSlotBookings = catchAsync(
  async (req: CustomRequest, res: Response) => {
    const data = await BookingServices.getAllSlotBookingsFromDB();
    const message =
      data.length > 0 ? "All bookings retrieved successfully" : "No Data Found";
    sendResponse(res, {
      message,
      statusCode: httpStatus.OK,
      data,
    });
  }
);
const getMyBookings = catchAsync(async (req: CustomRequest, res: Response) => {
  const data = await BookingServices.getMyBookingsFromDB(req.user as string);
  const message =
    data.length > 0 ? "User bookings retrieved successfully" : "No Data Found";
  sendResponse(res, {
    message,
    statusCode: httpStatus.OK,
    data,
  });
});
export const BookingControllers = {
  createSlotBooking,
  getAllSlotBookings,
  getMyBookings,
};
