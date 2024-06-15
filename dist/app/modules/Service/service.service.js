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
exports.ServiceServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../errors/AppError");
const service_model_1 = __importDefault(require("./service.model"));
const createServiceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield service_model_1.default.create(payload);
    return service;
});
const getServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield service_model_1.default.find();
    return response;
});
const getSingleServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield service_model_1.default.findById(id);
    return response;
});
const updateServiceIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedServiceData = yield service_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return updatedServiceData;
});
const deleteServiceIntoDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const checkServiceAlreadyDeleted = yield service_model_1.default.findOne({
        _id: id,
    });
    if (checkServiceAlreadyDeleted === null || checkServiceAlreadyDeleted === void 0 ? void 0 : checkServiceAlreadyDeleted.isDeleted) {
        throw new AppError_1.AppError("service not found or already deleted service", http_status_1.default.NOT_FOUND);
    }
    const updatedServiceData = yield service_model_1.default.findByIdAndUpdate(id, { isDeleted: true }, {
        new: true,
    });
    return updatedServiceData;
});
exports.ServiceServices = {
    createServiceIntoDB,
    getSingleServiceFromDB,
    getServicesFromDB,
    updateServiceIntoDB,
    deleteServiceIntoDb,
};
