import { Router } from "express";
import authGuard from "../../../lib/middlewares/auth.middleware";
import { validateRequest } from "../../../lib/middlewares/requestValidation";
import {
  serviceValidation,
  updatedServiceValidation,
} from "./service.validation";
import { ServiceControllers } from "./service.controller";
import { USER_ROLE } from "../User/user.constant";
import { SlotControllers } from "../Slot/slot.controller";
import { serviceSlotValidation } from "../Slot/slot.validation";

const router = Router();
router.get("/", ServiceControllers.getServices);
router.get("/:id", ServiceControllers.getSingleService);
router.post(
  "/",
  authGuard(USER_ROLE.Admin),
  validateRequest(serviceValidation),
  ServiceControllers.createService
);
router.put(
  "/:id",
  authGuard(USER_ROLE.Admin),
  validateRequest(updatedServiceValidation),
  ServiceControllers.updateService
);
router.post(
  "/slots",
  authGuard(USER_ROLE.Admin),
  validateRequest(serviceSlotValidation),
  SlotControllers.createSlot
);
router.delete("/:id", ServiceControllers.deleteService);
export { router as serviceRouter };
