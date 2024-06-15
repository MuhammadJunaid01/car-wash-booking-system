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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingServices = exports.createBookingIntoDB = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../errors/AppError");
const service_model_1 = __importDefault(require("../Service/service.model"));
const slot_model_1 = __importDefault(require("../Slot/slot.model"));
const user_model_1 = __importDefault(require("../User/user.model"));
const bookings_model_1 = __importDefault(require("./bookings.model"));
const mongoose_1 = require("mongoose");
const createBookingIntoDB = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { slotId, serviceId, vehicleBrand, vehicleModel, vehicleType, manufacturingYear, registrationPlate, } = payload;
    const [customer, serviceData, slotData] = yield Promise.all([
        user_model_1.default.findById(userId),
        service_model_1.default.findById(serviceId),
        slot_model_1.default.findById(slotId),
    ]);
    if (!customer) {
        throw new AppError_1.AppError("user not found", http_status_1.default.NOT_FOUND);
    }
    if (!serviceData) {
        throw new AppError_1.AppError("service  not found", http_status_1.default.NOT_FOUND);
    }
    if (!slotData) {
        throw new AppError_1.AppError("slot  not found", http_status_1.default.NOT_FOUND);
    }
    const data = {
        slot: slotId,
        service: serviceId,
        customer: new mongoose_1.Types.ObjectId(userId),
        vehicleType,
        vehicleBrand,
        vehicleModel,
        manufacturingYear,
        registrationPlate,
    };
    const booking = yield bookings_model_1.default.create(data);
    slotData.isBooked = "booked";
    yield slotData.save();
    // eslint-disable-next-line
    const _a = booking.toObject(), { customer: cus, slot, service } = _a, bookingData = __rest(_a, ["customer", "slot", "service"]);
    const response = Object.assign({ customer, service: serviceData, slot: slotData }, bookingData);
    return response;
});
exports.createBookingIntoDB = createBookingIntoDB;
const getAllSlotBookingsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield bookings_model_1.default.find()
        .populate("service")
        .populate("slot")
        .populate("customer");
    return response;
});
const getMyBookingsFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield bookings_model_1.default.find({ customer: userId })
        .populate("service")
        .populate("slot")
        .populate("customer");
    return response;
});
exports.BookingServices = {
    createBookingIntoDB: exports.createBookingIntoDB,
    getAllSlotBookingsFromDB,
    getMyBookingsFromDB,
};
