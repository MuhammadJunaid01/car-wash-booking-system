"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode, code, stack) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.code = code;
        this.stack = stack;
        this.statusCode = statusCode;
        this.stack = stack;
        this.code = code;
    }
}
exports.AppError = AppError;
