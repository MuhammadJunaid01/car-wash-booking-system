import { differenceInMinutes, parseISO } from "date-fns";
import { ISlot } from "./slot.interface";
import Slot from "./slot.model";
import Service from "../Service/service.model";
import { AppError } from "../../errors/AppError";
import httpStatus from "http-status";
import generateSlot from "../../../lib/utils/generateSlot";
import { QueryBuilder } from "../../builder/QueryBuilder";
const createSlotIntoDB = async (payload: ISlot) => {
  const { service, startTime, endTime, date } = payload;
  const isServiceExist = await Service.findById(service);
  if (!isServiceExist) {
    throw new AppError("Service not found", httpStatus.NOT_FOUND);
  }
  const serviceStartTime = parseISO(`${date}T${startTime}Z`);
  const serviceEndTime = parseISO(`${date}T${endTime}Z`);
  const totalDurationInMinutes = differenceInMinutes(
    serviceEndTime,
    serviceStartTime
  );

  // Calculate number of slots
  const totalSlots = Math.floor(
    totalDurationInMinutes / isServiceExist.duration
  );
  const slotsData = generateSlot({
    totalSlots: totalSlots,
    slotData: payload,
    serviceStartTime: serviceStartTime,
    serviceDuration: isServiceExist.duration,
  });
  const data = await Slot.insertMany(slotsData);
  return data;
};
const getSlotsFromDB = async (query: Record<string, unknown>) => {
  const servicesQuery = new QueryBuilder(Slot.find().populate("service"), query)
    .search()
    .filter()
    .sort()
    .paginate()
    .fields();
  const data = await servicesQuery.modelQuery.exec();
  return data;
};
export const SlotServices = {
  createSlotIntoDB,
  getSlotsFromDB,
};
