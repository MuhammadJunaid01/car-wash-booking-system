import { z } from "zod";

const slotBookingSchema = z.object({
  serviceId: z
    .string({
      required_error: "serviceId is required filed ",
    })
    .min(2),
  slotId: z
    .string({
      required_error: "slotId is required filed ",
    })
    .min(2),
  vehicleType: z.enum(["car", "bike", "truck"], {
    required_error: "vehicleType is required filed ",
  }),
  vehicleBrand: z
    .string({
      required_error: "vehicle Brand is required filed",
    })
    .min(1),
  vehicleModel: z
    .string({
      required_error: "vehicle Model is required filed",
    })
    .min(1),
  manufacturingYear: z
    .number({
      required_error: "manufacturing Year is required filed",
    })
    .min(1),
  registrationPlate: z
    .string({
      required_error: "registration Plate is required filed",
    })
    .min(1),
});
export const slotBookingValidation = z.object({
  body: slotBookingSchema,
});
