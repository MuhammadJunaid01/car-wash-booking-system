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
exports.ServiceControllers = void 0;
const catchAsync_1 = __importDefault(require("../../../lib/middlewares/catchAsync"));
const service_service_1 = require("./service.service");
const sendResponse_1 = __importDefault(require("../../../lib/utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield service_service_1.ServiceServices.createServiceIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        message: "Service created successfully",
        data: service,
        statusCode: http_status_1.default.OK,
    });
}));
const getSingleService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const service = yield service_service_1.ServiceServices.getSingleServiceFromDB(id);
    (0, sendResponse_1.default)(res, {
        message: "Service retrieved successfully",
        data: service,
        statusCode: http_status_1.default.OK,
    });
}));
const getServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield service_service_1.ServiceServices.getServicesFromDB();
    (0, sendResponse_1.default)(res, {
        message: "Services retrieved successfully",
        data: service,
        statusCode: http_status_1.default.OK,
    });
}));
const updateService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const service = yield service_service_1.ServiceServices.updateServiceIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        message: "Service updated successfully",
        data: service,
        statusCode: http_status_1.default.OK,
    });
}));
const deleteService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const service = yield service_service_1.ServiceServices.deleteServiceIntoDb(id);
    (0, sendResponse_1.default)(res, {
        message: "Service deleted successfully",
        data: service,
        statusCode: http_status_1.default.OK,
    });
}));
exports.ServiceControllers = {
    createService,
    getSingleService,
    getServices,
    updateService,
    deleteService,
};
