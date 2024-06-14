"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_route_1 = require("../modules/posts/post.route");
const router = (0, express_1.Router)();
const modules = [{ path: "/post", route: post_route_1.postRouter }];
modules.forEach(({ path, route }) => router.use(path, route));
exports.default = router;
