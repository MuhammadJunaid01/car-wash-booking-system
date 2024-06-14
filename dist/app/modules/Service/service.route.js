"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRouter = void 0;
const express_1 = require("express");
const auth_middleware_1 = __importDefault(require("../../../lib/middlewares/auth.middleware"));
const requestValidation_1 = require("../../../lib/middlewares/requestValidation");
const service_validation_1 = require("./service.validation");
const service_controller_1 = require("./service.controller");
const user_constant_1 = require("../User/user.constant");
const router = (0, express_1.Router)();
exports.serviceRouter = router;
router.get("/", service_controller_1.ServiceControllers.getServices);
router.get("/:id", service_controller_1.ServiceControllers.getSingleService);
router.post("/", (0, auth_middleware_1.default)(user_constant_1.USER_ROLE.Admin), (0, requestValidation_1.validateRequest)(service_validation_1.serviceValidation), service_controller_1.ServiceControllers.createService);
router.put("/:id", (0, auth_middleware_1.default)(user_constant_1.USER_ROLE.Admin), (0, requestValidation_1.validateRequest)(service_validation_1.updatedServiceValidation), service_controller_1.ServiceControllers.updateService);
