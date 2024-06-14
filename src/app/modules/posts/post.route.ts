import { Router } from "express";
import { getAllPosts } from "./post.controller";
const router = Router();
router.get("/get-all-posts", getAllPosts);
export { router as postRouter };
