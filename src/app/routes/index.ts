import { Router } from "express";
import { userRouter } from "../modules/User/user.route";
import { serviceRouter } from "../modules/Service/service.route";

const router = Router();
const modules = [
  { path: "/auth", route: userRouter },
  { path: "/services", route: serviceRouter },
];
modules.forEach(({ path, route }) => router.use(path, route));
export default router;
