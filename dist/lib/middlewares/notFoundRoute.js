"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNotFound = void 0;
const handleNotFound = (req, res, next) => {
    res.status(404).json({ message: "Route not found" });
};
exports.handleNotFound = handleNotFound;
