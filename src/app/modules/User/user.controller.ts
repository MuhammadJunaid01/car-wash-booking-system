import { Request, Response } from "express";
import catchAsync from "../../../lib/middlewares/catchAsync";
import { UserServices } from "./user.service";
import sendResponse from "../../../lib/utils/sendResponse";
import httpStatus from "http-status";

const signUp = catchAsync(async (req: Request, res: Response) => {
  const response = await UserServices.signUpUserIntoDB(req.body);
  sendResponse(res, {
    message: "User registered successfully",
    statusCode: httpStatus.OK,
    data: response,
  });
});
const login = catchAsync(async (req: Request, res: Response) => {
  const response = await UserServices.loginUser(req.body);
  const { data, token } = response;
  sendResponse(res, {
    message: "User logged in successfully",
    statusCode: httpStatus.OK,
    data,
    token,
  });
});
export const UserControllers = {
  signUp,
  login,
};
