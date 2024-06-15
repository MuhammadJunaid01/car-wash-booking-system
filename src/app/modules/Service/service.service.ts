import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { IService } from "./service.interface";
import Service from "./service.model";

const createServiceIntoDB = async (payload: IService) => {
  const service = await Service.create(payload);
  return service;
};
const getServicesFromDB = async () => {
  const response = await Service.find();
  return response;
};
const getSingleServiceFromDB = async (id: string) => {
  const response = await Service.findById(id);
  return response;
};
const updateServiceIntoDB = async (id: string, payload: Partial<IService>) => {
  const updatedServiceData = await Service.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return updatedServiceData;
};
const deleteServiceIntoDb = async (id: string) => {
  const checkServiceAlreadyDeleted = await Service.findOne({
    _id: id,
  });
  if (checkServiceAlreadyDeleted?.isDeleted) {
    throw new AppError(
      "service not found or already deleted service",
      httpStatus.NOT_FOUND
    );
  }
  const updatedServiceData = await Service.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    }
  );
  return updatedServiceData;
};
export const ServiceServices = {
  createServiceIntoDB,
  getSingleServiceFromDB,
  getServicesFromDB,
  updateServiceIntoDB,
  deleteServiceIntoDb,
};
