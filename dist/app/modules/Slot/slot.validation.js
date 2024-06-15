"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceSlotValidation = void 0;
const zod_1 = require("zod");
const servicesSlotZodSchema = zod_1.z.object({
    service: zod_1.z.string({
        required_error: "service id is required",
    }),
    date: zod_1.z
        .string({
        required_error: "date is required field",
    })
        .regex(/^\d{4}-\d{2}-\d{2}$/), // Validates YYYY-MM-DD format
    startTime: zod_1.z
        .string({
        required_error: "startTime is required field",
    })
        .regex(/^\d{2}:\d{2}$/), // Validates HH:MM format
    endTime: zod_1.z
        .string({
        required_error: "endTime is required field",
    })
        .regex(/^\d{2}:\d{2}$/), // Validates HH:MM format
});
exports.serviceSlotValidation = zod_1.z.object({
    body: servicesSlotZodSchema,
});
