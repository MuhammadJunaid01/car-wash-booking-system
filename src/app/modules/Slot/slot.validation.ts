import { z } from "zod";

const servicesSlotZodSchema = z.object({
  service: z.string({
    required_error: "service id is required",
  }),
  date: z
    .string({
      required_error: "date is required field",
    })
    .regex(/^\d{4}-\d{2}-\d{2}$/), // Validates YYYY-MM-DD format
  startTime: z
    .string({
      required_error: "startTime is required field",
    })
    .regex(/^\d{2}:\d{2}$/), // Validates HH:MM format
  endTime: z
    .string({
      required_error: "endTime is required field",
    })
    .regex(/^\d{2}:\d{2}$/), // Validates HH:MM format
});
export const serviceSlotValidation = z.object({
  body: servicesSlotZodSchema,
});
