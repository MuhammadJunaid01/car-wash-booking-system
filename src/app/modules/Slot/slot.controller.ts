import { Request, Response } from "express";
import catchAsync from "../../../lib/middlewares/catchAsync";
import { SlotServices } from "./slot.service";
import sendResponse from "../../../lib/utils/sendResponse";
import httpStatus from "http-status";

const createSlot = catchAsync(async (req: Request, res: Response) => {
  const data = await SlotServices.createSlotIntoDB(req.body);
  sendResponse(res, {
    message: "Slots created successfully",
    statusCode: httpStatus.OK,
    data,
  });
});
const getSlots = catchAsync(async (req: Request, res: Response) => {
  const data = await SlotServices.getSlotsFromDB(req.query);
  const message =
    data.length > 0
      ? "Available slots retrieved successfully"
      : "No Data Found";
  sendResponse(res, {
    message,
    statusCode: httpStatus.OK,
    data,
  });
});
export const SlotControllers = {
  createSlot,
  getSlots,
};
