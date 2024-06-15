"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHandelers_1 = __importDefault(require("./lib/middlewares/globalErrorHandelers"));
const notFoundRoute_1 = require("./lib/middlewares/notFoundRoute");
// mongodb://localhost:27017/assingment-03
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.send("Car Wash Booking System Server Running................");
});
app.use(notFoundRoute_1.handleNotFound);
app.use(globalErrorHandelers_1.default);
exports.default = app;
