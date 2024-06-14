/* eslint-disable */

import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils";

const globalErrorHandler = async (
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";
  res.status(statusCode).json({ success: false, message });
};
export default globalErrorHandler;
