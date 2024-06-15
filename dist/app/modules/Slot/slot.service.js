"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotServices = void 0;
const date_fns_1 = require("date-fns");
const slot_model_1 = __importDefault(require("./slot.model"));
const service_model_1 = __importDefault(require("../Service/service.model"));
const AppError_1 = require("../../errors/AppError");
const http_status_1 = __importDefault(require("http-status"));
const generateSlot_1 = __importDefault(require("../../../lib/utils/generateSlot"));
const QueryBuilder_1 = require("../../builder/QueryBuilder");
const createSlotIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { service, startTime, endTime, date } = payload;
    const isServiceExist = yield service_model_1.default.findById(service);
    if (!isServiceExist) {
        throw new AppError_1.AppError("Service not found", http_status_1.default.NOT_FOUND);
    }
    const serviceStartTime = (0, date_fns_1.parseISO)(`${date}T${startTime}Z`);
    const serviceEndTime = (0, date_fns_1.parseISO)(`${date}T${endTime}Z`);
    const totalDurationInMinutes = (0, date_fns_1.differenceInMinutes)(serviceEndTime, serviceStartTime);
    // Calculate number of slots
    const totalSlots = Math.floor(totalDurationInMinutes / isServiceExist.duration);
    const slotsData = (0, generateSlot_1.default)({
        totalSlots: totalSlots,
        slotData: payload,
        serviceStartTime: serviceStartTime,
        serviceDuration: isServiceExist.duration,
    });
    const data = yield slot_model_1.default.insertMany(slotsData);
    return data;
});
const getSlotsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const servicesQuery = new QueryBuilder_1.QueryBuilder(slot_model_1.default.find().populate("service"), query)
        .search()
        .filter()
        .sort()
        .paginate()
        .fields();
    const data = yield servicesQuery.modelQuery.exec();
    return data;
});
exports.SlotServices = {
    createSlotIntoDB,
    getSlotsFromDB,
};
