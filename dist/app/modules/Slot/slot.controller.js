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
exports.SlotControllers = void 0;
const catchAsync_1 = __importDefault(require("../../../lib/middlewares/catchAsync"));
const slot_service_1 = require("./slot.service");
const sendResponse_1 = __importDefault(require("../../../lib/utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const createSlot = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield slot_service_1.SlotServices.createSlotIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        message: "Slots created successfully",
        statusCode: http_status_1.default.OK,
        data,
    });
}));
const getSlots = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield slot_service_1.SlotServices.getSlotsFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        message: "Available slots retrieved successfully",
        statusCode: http_status_1.default.OK,
        data,
    });
}));
exports.SlotControllers = {
    createSlot,
    getSlots,
};
