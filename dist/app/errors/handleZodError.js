"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (error) => {
    const statusCode = 404;
    const message = "validation error";
    const errorSources = error.issues.map((isue) => {
        return {
            message: isue.message,
            path: isue.path[isue.path.length - 1],
        };
    });
    return {
        statusCode,
        message,
        errorSources,
    };
};
exports.default = handleZodError;
