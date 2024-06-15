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
exports.BookingControllers = void 0;
const catchAsync_1 = __importDefault(require("../../../lib/middlewares/catchAsync"));
const bookings_service_1 = require("./bookings.service");
const sendResponse_1 = __importDefault(require("../../../lib/utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const createSlotBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield bookings_service_1.BookingServices.createBookingIntoDB(req.body, req.user);
    (0, sendResponse_1.default)(res, {
        message: "Booking successful",
        statusCode: http_status_1.default.OK,
        data,
    });
}));
const getAllSlotBookings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield bookings_service_1.BookingServices.getAllSlotBookingsFromDB();
    const message = data.length > 0 ? "All bookings retrieved successfully" : "No Data Found";
    (0, sendResponse_1.default)(res, {
        message,
        statusCode: http_status_1.default.OK,
        data,
    });
}));
const getMyBookings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield bookings_service_1.BookingServices.getMyBookingsFromDB(req.user);
    const message = data.length > 0 ? "User bookings retrieved successfully" : "No Data Found";
    (0, sendResponse_1.default)(res, {
        message,
        statusCode: http_status_1.default.OK,
        data,
    });
}));
exports.BookingControllers = {
    createSlotBooking,
    getAllSlotBookings,
    getMyBookings,
};
