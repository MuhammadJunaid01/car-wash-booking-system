"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/User/user.route");
const service_route_1 = require("../modules/Service/service.route");
const router = (0, express_1.Router)();
const modules = [
    { path: "/auth", route: user_route_1.userRouter },
    { path: "/services", route: service_route_1.serviceRouter },
];
modules.forEach(({ path, route }) => router.use(path, route));
exports.default = router;
