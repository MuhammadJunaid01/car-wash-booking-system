import { z } from "zod";

const IUserZodSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(5, { message: "Name must be at least 5 characters long" }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Invalid email format" }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, { message: "Password must be at least 8 characters long" }),
  phone: z.string({
    required_error: "Phone Number is required",
  }),
  role: z.enum(["admin", "user"], {
    required_error: "Role is required",
  }),
  address: z.string({
    required_error: "Address is required",
  }),
});
const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Invalid email format" }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, { message: "Password must be at least 8 characters long" }),
});
export const signupValidationSchema = z.object({
  body: IUserZodSchema,
});
export const loginValidation = z.object({
  body: loginSchema,
});
