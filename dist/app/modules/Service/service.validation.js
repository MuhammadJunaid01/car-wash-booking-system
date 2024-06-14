"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedServiceValidation = exports.serviceValidation = void 0;
const zod_1 = require("zod");
const ServiceSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "service name is required",
    }), // Title of the service
    description: zod_1.z
        .string({
        required_error: "service description is required",
    })
        .min(10, {
        message: "description description must be at least 8 characters long",
    }),
    price: zod_1.z
        .number({
        required_error: "service price is required",
    })
        .nonnegative("service price must be a non-negative number"),
    duration: zod_1.z
        .number({
        required_error: "service duration is required",
    })
        .int()
        .positive("service duration must be a positive integer"),
    isDeleted: zod_1.z.boolean(),
});
exports.serviceValidation = zod_1.z.object({
    body: ServiceSchema,
});
exports.updatedServiceValidation = zod_1.z.object({
    body: ServiceSchema.partial(),
});
