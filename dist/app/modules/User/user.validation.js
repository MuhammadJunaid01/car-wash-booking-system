"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.signupValidationSchema = void 0;
const zod_1 = require("zod");
const IUserZodSchema = zod_1.z.object({
    name: zod_1.z
        .string({
        required_error: "Name is required",
    })
        .min(5, { message: "Name must be at least 5 characters long" }),
    email: zod_1.z
        .string({
        required_error: "Email is required",
    })
        .email({ message: "Invalid email format" }),
    password: zod_1.z
        .string({
        required_error: "Password is required",
    })
        .min(8, { message: "Password must be at least 8 characters long" }),
    phone: zod_1.z.string({
        required_error: "Phone Number is required",
    }),
    role: zod_1.z.enum(["admin", "user"], {
        required_error: "Role is required",
    }),
    address: zod_1.z.string({
        required_error: "Address is required",
    }),
});
const loginSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: "Email is required",
    })
        .email({ message: "Invalid email format" }),
    password: zod_1.z
        .string({
        required_error: "Password is required",
    })
        .min(8, { message: "Password must be at least 8 characters long" }),
});
exports.signupValidationSchema = zod_1.z.object({
    body: IUserZodSchema,
});
exports.loginValidation = zod_1.z.object({
    body: loginSchema,
});
