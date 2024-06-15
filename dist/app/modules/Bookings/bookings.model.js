"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const slotBookingSchema = new mongoose_1.Schema({
    service: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Service",
        required: true,
    },
    slot: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Slot",
        required: true,
    },
    customer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    vehicleType: {
        type: String,
        enum: ["car", "bike", "truck"],
        required: true,
    },
    vehicleBrand: {
        type: String,
        required: true,
    },
    vehicleModel: {
        type: String,
        required: true,
    },
    manufacturingYear: {
        type: Number,
        required: true,
    },
    registrationPlate: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const SlotBooking = (0, mongoose_1.model)("SlotBooking", slotBookingSchema);
exports.default = SlotBooking;
