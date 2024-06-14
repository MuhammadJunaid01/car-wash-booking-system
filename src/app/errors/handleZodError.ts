import { ZodError } from "zod";
import { TErrorReturnType, TErrorSouce } from "../interfaces";

const handleZodError = (error: ZodError): TErrorReturnType => {
  const statusCode = 404;
  const message = "validation error";
  const errorSources: TErrorSouce[] = error.issues.map((isue) => {
    return {
      message: isue.message,
      path: isue.path[isue.path.length - 1],
    };
  });
  return {
    statusCode,
    message,
    errorSources,
  };
};

export default handleZodError;
