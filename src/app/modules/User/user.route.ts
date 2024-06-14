import { Router } from "express";
import { validateRequest } from "../../../lib/middlewares/requestValidation";
import { loginValidation, signupValidationSchema } from "./user.validation";
import { UserControllers } from "./user.controller";

const router = Router();
router.post(
  "/signup",
  validateRequest(signupValidationSchema),
  UserControllers.signUp
);
router.post("/login", validateRequest(loginValidation), UserControllers.login);
export { router as userRouter };
