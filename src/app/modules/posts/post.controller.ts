import { Response, Request } from "express";
import catchAsync from "../../../lib/middlewares/catchAsync";
import sendResponse from "../../../lib/utils/sendResponse";
import httpStatus from "http-status";
export const getAllPosts = catchAsync(async (req: Request, res: Response) => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await posts.json();
  sendResponse(res, {
    message: "successfully post retrived.",
    success: true,
    statusCode: httpStatus.OK,
    data: data,
  });
});
