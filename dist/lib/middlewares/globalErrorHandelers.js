"use strict";
/* eslint-disable */
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
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("../../app/errors/handleZodError"));
const mongoose_1 = __importDefault(require("mongoose"));
const handleMongooseValidationError_1 = __importDefault(require("../../app/errors/handleMongooseValidationError"));
const handleMongooseCatsError_1 = __importDefault(require("../../app/errors/handleMongooseCatsError"));
const handleMongooseDupKeyError_1 = __importDefault(require("../../app/errors/handleMongooseDupKeyError"));
const AppError_1 = require("../../app/errors/AppError");
const globalErrorHandler = (error, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let statusCode = error.statusCode || 500;
    let message = error.message || "Internal server error";
    let stack = error === null || error === void 0 ? void 0 : error.stack;
    let errorMessages = [{ message: message, path: "" }];
    if (error instanceof zod_1.ZodError) {
        const customizedError = (0, handleZodError_1.default)(error);
        statusCode = customizedError.statusCode;
        message = customizedError.message;
        errorMessages = customizedError.errorSources;
    }
    else if (error instanceof mongoose_1.default.Error.ValidationError) {
        const customizedError = (0, handleMongooseValidationError_1.default)(error);
        statusCode = customizedError.statusCode;
        message = customizedError.message;
        errorMessages = customizedError.errorSources;
    }
    else if (error instanceof mongoose_1.default.Error.CastError) {
        const customizedError = (0, handleMongooseCatsError_1.default)(error);
        statusCode = customizedError.statusCode;
        message = customizedError.message;
        errorMessages = customizedError.errorSources;
    }
    else if (error.code === 11000 || error.code === "E11000") {
        const customizedError = (0, handleMongooseDupKeyError_1.default)(error);
        statusCode = customizedError.statusCode;
        message = customizedError.message;
        errorMessages = customizedError.errorSources;
    }
    else if (error.name == "TokenExpiredError") {
        statusCode = 403;
        message = "Token has expired";
        errorMessages = [{ message: "Token has expired", path: "" }];
    }
    else if (error instanceof AppError_1.AppError) {
        statusCode = error.statusCode;
        message = error.message;
        errorMessages = [{ path: "", message: error.message }];
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack,
    });
});
exports.default = globalErrorHandler;
