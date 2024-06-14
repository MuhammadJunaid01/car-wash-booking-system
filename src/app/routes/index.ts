import { Router } from "express";
import { userRouter } from "../modules/User/user.route";

const router = Router();
const modules = [{ path: "/auth", route: userRouter }];
modules.forEach(({ path, route }) => router.use(path, route));
export default router;
