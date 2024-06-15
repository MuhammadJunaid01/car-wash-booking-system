"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotBookingValidation = void 0;
const zod_1 = require("zod");
const slotBookingSchema = zod_1.z.object({
    serviceId: zod_1.z
        .string({
        required_error: "serviceId is required filed ",
    })
        .min(2),
    slotId: zod_1.z
        .string({
        required_error: "slotId is required filed ",
    })
        .min(2),
    vehicleType: zod_1.z.enum(["car", "bike", "truck"], {
        required_error: "vehicleType is required filed ",
    }),
    vehicleBrand: zod_1.z
        .string({
        required_error: "vehicle Brand is required filed",
    })
        .min(1),
    vehicleModel: zod_1.z
        .string({
        required_error: "vehicle Model is required filed",
    })
        .min(1),
    manufacturingYear: zod_1.z
        .number({
        required_error: "manufacturing Year is required filed",
    })
        .min(1),
    registrationPlate: zod_1.z
        .string({
        required_error: "registration Plate is required filed",
    })
        .min(1),
});
exports.slotBookingValidation = zod_1.z.object({
    body: slotBookingSchema,
});
