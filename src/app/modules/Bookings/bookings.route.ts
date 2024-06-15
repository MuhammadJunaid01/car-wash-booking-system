import { Router } from "express";
import { validateRequest } from "../../../lib/middlewares/requestValidation";
import { slotBookingValidation } from "./bookings.validation";
import authGuard from "../../../lib/middlewares/auth.middleware";
import { BookingControllers } from "./bookings.controller";
import { USER_ROLE } from "../User/user.constant";

const router = Router();
router.get(
  "/bookings",
  authGuard(USER_ROLE.Admin),
  BookingControllers.getAllSlotBookings
);
router.get(
  "/my-booking",
  authGuard(USER_ROLE.User),
  BookingControllers.getMyBookings
);
router.post(
  "/bookings",
  authGuard(USER_ROLE.User),
  validateRequest(slotBookingValidation),
  BookingControllers.createSlotBooking
);
export { router as bookingRouter };
