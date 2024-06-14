import { z } from "zod";

const ServiceSchema = z.object({
  name: z.string({
    required_error: "service name is required",
  }), // Title of the service
  description: z
    .string({
      required_error: "service description is required",
    })
    .min(10, {
      message: "description description must be at least 8 characters long",
    }),
  price: z
    .number({
      required_error: "service price is required",
    })
    .nonnegative("service price must be a non-negative number"),
  duration: z
    .number({
      required_error: "service duration is required",
    })
    .int()
    .positive("service duration must be a positive integer"),
  isDeleted: z.boolean(),
});

export const serviceValidation = z.object({
  body: ServiceSchema,
});
export const updatedServiceValidation = z.object({
  body: ServiceSchema.partial(),
});
