import { Router } from "express";
import { postRouter } from "../modules/posts/post.route";

const router = Router();
const modules = [{ path: "/post", route: postRouter }];
modules.forEach(({ path, route }) => router.use(path, route));
export default router;
