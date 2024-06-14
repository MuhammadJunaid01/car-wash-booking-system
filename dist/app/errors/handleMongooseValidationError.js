"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleMongooseValidationError = (error) => {
    const message = "validation error";
    const statusCode = 400;
    const errorSources = Object.values(error.errors).map((err) => {
        return {
            message: err.message,
            path: err.path,
        };
    });
    return {
        message,
        statusCode,
        errorSources,
    };
};
exports.default = handleMongooseValidationError;
