import mongoose from "mongoose";
import { TErrorReturnType, TErrorSouce } from "../interfaces";

const handleMongooseValidationError = (
  error: mongoose.Error.ValidationError
): TErrorReturnType => {
  const message = "validation error";
  const statusCode = 400;
  const errorSources: TErrorSouce[] = Object.values(error.errors).map((err) => {
    return {
      message: err.message,
      path: err.path,
    };
  });
  return {
    message,
    statusCode,
    errorSources,
  };
};

export default handleMongooseValidationError;
