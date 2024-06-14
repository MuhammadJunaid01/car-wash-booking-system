/* eslint-disable */

import { NextFunction, Request, Response } from "express";
import { TErrorSouce } from "../../app/interfaces";
import config from "../../app/config";
import { ZodError } from "zod";
import handleZodError from "../../app/errors/handleZodError";
import mongoose from "mongoose";
import handleMongooseValidationError from "../../app/errors/handleMongooseValidationError";
import handleMongooseCatsError from "../../app/errors/handleMongooseCatsError";
import handleMongooseDupKeyError from "../../app/errors/handleMongooseDupKeyError";
import { AppError } from "../../app/errors/AppError";
import httpStatus from "http-status";

const globalErrorHandler = async (
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || "Internal server error";
  let stack = config.NODE_ENV === "development" ? error?.stack : null;

  let errorSources: TErrorSouce[] = [{ message: message, path: "" }];
  if (error instanceof ZodError) {
    const customizedError = handleZodError(error);
    statusCode = customizedError.statusCode;
    message = customizedError.message;
    errorSources = customizedError.errorSources;
  } else if (error instanceof mongoose.Error.ValidationError) {
    const customizedError = handleMongooseValidationError(error);
    statusCode = customizedError.statusCode;
    message = customizedError.message;
    errorSources = customizedError.errorSources;
  } else if (error instanceof mongoose.Error.CastError) {
    const customizedError = handleMongooseCatsError(error);
    statusCode = customizedError.statusCode;
    message = customizedError.message;
    errorSources = customizedError.errorSources;
  } else if (error.code === 11000 || error.code === "E11000") {
    const customizedError = handleMongooseDupKeyError(error);
    statusCode = customizedError.statusCode;
    message = customizedError.message;
    errorSources = customizedError.errorSources;
  } else if (error.name == "TokenExpiredError") {
    statusCode = 403;
    message = "Token has expired";
    errorSources = [{ message: "Token has expired", path: "" }];
  } else if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
    errorSources = [{ path: "", message: error.message }];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack,
  });
};
export default globalErrorHandler;
