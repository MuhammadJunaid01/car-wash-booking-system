"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const post_controller_1 = require("./post.controller");
const router = (0, express_1.Router)();
exports.postRouter = router;
router.get("/get-all-posts", post_controller_1.getAllPosts);
