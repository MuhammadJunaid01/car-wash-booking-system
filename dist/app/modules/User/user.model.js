"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
function validateEmail(email) {
    // Example custom validation logic (can be more robust depending on requirements)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: validateEmail,
            message: "Invalid Email",
        },
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: true,
        default: "user",
    },
    phone: {
        type: String,
        required: [true, "Phone Number is required"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.isNew || this.isModified("password")) {
            try {
                const saltRounds = parseInt(config_1.default.saltRounds);
                const hashedPassword = yield bcrypt_1.default.hash(this.password, saltRounds);
                this.password = hashedPassword;
            }
            catch (error) {
                return next(error);
            }
        }
        next();
    });
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
