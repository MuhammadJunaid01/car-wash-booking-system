"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleMongooseCatsError = (error) => {
    const message = "ID does not match";
    const statusCode = 400;
    const errorSources = [
        {
            message: error.message,
            path: error.path,
        },
    ];
    return {
        message,
        statusCode,
        errorSources,
    };
};
exports.default = handleMongooseCatsError;
