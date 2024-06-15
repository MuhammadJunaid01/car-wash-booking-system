import { Router } from "express";
import { validateRequest } from "../../../lib/middlewares/requestValidation";
import { slotBookingValidation } from "./bookings.validation";
import authGuard from "../../../lib/middlewares/auth.middleware";
import { BookingControllers } from "./bookings.controller";
import { USER_ROLE } from "../User/user.constant";

const router = Router();
router.get(
  "/",
  authGuard(USER_ROLE.Admin),
  BookingControllers.getAllSlotBookings
);
router.post(
  "/",
  authGuard(USER_ROLE.User),
  validateRequest(slotBookingValidation),
  BookingControllers.createSlotBooking
);
export { router as bookingRouter };
