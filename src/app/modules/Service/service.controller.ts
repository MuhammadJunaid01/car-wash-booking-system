import { Request, Response } from "express";
import catchAsync from "../../../lib/middlewares/catchAsync";
import { ServiceServices } from "./service.service";
import sendResponse from "../../../lib/utils/sendResponse";
import httpStatus from "http-status";

const createService = catchAsync(async (req: Request, res: Response) => {
  const service = await ServiceServices.createServiceIntoDB(req.body);
  sendResponse(res, {
    message: "Service created successfully",
    data: service,
    statusCode: httpStatus.OK,
  });
});
const getSingleService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const service = await ServiceServices.getSingleServiceFromDB(id);
  sendResponse(res, {
    message: "Service retrieved successfully",
    data: service,
    statusCode: httpStatus.OK,
  });
});
const getServices = catchAsync(async (req: Request, res: Response) => {
  const service = await ServiceServices.getServicesFromDB();
  const message =
    service.length > 0 ? "Services retrieved successfully" : "No Data Found";
  sendResponse(res, {
    message,
    data: service,
    statusCode: httpStatus.OK,
  });
});
const updateService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const service = await ServiceServices.updateServiceIntoDB(id, req.body);
  sendResponse(res, {
    message: "Service updated successfully",
    data: service,
    statusCode: httpStatus.OK,
  });
});
const deleteService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const service = await ServiceServices.deleteServiceIntoDb(id);
  sendResponse(res, {
    message: "Service deleted successfully",
    data: service,
    statusCode: httpStatus.OK,
  });
});
export const ServiceControllers = {
  createService,
  getSingleService,
  getServices,
  updateService,
  deleteService,
};
