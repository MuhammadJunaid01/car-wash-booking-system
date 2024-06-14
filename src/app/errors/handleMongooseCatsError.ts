import mongoose from "mongoose";
import { TErrorReturnType, TErrorSouce } from "../interfaces";

const handleMongooseCatsError = (
  error: mongoose.Error.CastError
): TErrorReturnType => {
  const message = "ID does not match";
  const statusCode = 400;
  const errorSources: TErrorSouce[] = [
    {
      message: error.message,
      path: error.path,
    },
  ];
  return {
    message,
    statusCode,
    errorSources,
  };
};
export default handleMongooseCatsError;
