import { Response } from "express";
type ResponseData<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
};
const sendResponse = <T>(res: Response, data: ResponseData<T>) => {
  const { statusCode, ...rest } = data;
  return res.status(statusCode).json({
    ...rest,
  });
};

export default sendResponse;
