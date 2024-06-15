"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRouter = void 0;
const express_1 = require("express");
const requestValidation_1 = require("../../../lib/middlewares/requestValidation");
const bookings_validation_1 = require("./bookings.validation");
const auth_middleware_1 = __importDefault(require("../../../lib/middlewares/auth.middleware"));
const bookings_controller_1 = require("./bookings.controller");
const user_constant_1 = require("../User/user.constant");
const router = (0, express_1.Router)();
exports.bookingRouter = router;
router.get("/bookings", (0, auth_middleware_1.default)(user_constant_1.USER_ROLE.Admin), bookings_controller_1.BookingControllers.getAllSlotBookings);
router.get("/my-booking", (0, auth_middleware_1.default)(user_constant_1.USER_ROLE.User), bookings_controller_1.BookingControllers.getMyBookings);
router.post("/bookings", (0, auth_middleware_1.default)(user_constant_1.USER_ROLE.User), (0, requestValidation_1.validateRequest)(bookings_validation_1.slotBookingValidation), bookings_controller_1.BookingControllers.createSlotBooking);
