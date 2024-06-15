"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNotFound = void 0;
const handleNotFound = (req, res, next) => {
    const url = `http://localhost:5000${req.originalUrl}`;
    // console.log(req);
    res.status(404).json({ message: "Not Found", url });
};
exports.handleNotFound = handleNotFound;
