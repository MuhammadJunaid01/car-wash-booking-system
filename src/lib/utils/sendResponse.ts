import { Response } from "express";
type ResponseData<T> = {
  statusCode: number;
  message: string;
  data: T;
  token?: string;
};
const sendResponse = <T>(res: Response, data: ResponseData<T>) => {
  const { statusCode, ...rest } = data;
  return res.status(statusCode).json({
    ...rest,
    success: true,
  });
};

export default sendResponse;
