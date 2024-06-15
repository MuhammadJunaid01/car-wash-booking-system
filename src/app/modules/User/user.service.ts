import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { ILoginUser, IUser } from "./user.interface";
import User from "./user.model";
import createToken from "../../../lib/utils/createToken";
import config from "../../config";
const signUpUserIntoDB = async (payload: IUser) => {
  const isExistUser = await User.findOne({ email: payload.email });
  if (!isExistUser) {
    const createdNewUser = await User.create(payload);
    const newUserObject = createdNewUser.toObject();

    // eslint-disable-next-line
    const { password, ...rest } = newUserObject;
    return rest;
  }
  throw new AppError(`this user already exist.`, httpStatus.CONFLICT);
};
const loginUser = async (payload: ILoginUser) => {
  const user = await User.findOne({ email: payload.email });
  if (user) {
    const token = createToken({
      userId: user.id,
      role: user.role,
      secret: config.access_token_secret,
      expiresIn: config.expiresIn,
    });
    return {
      data: user,
      token: token,
    };
  }
  throw new AppError("user not found", httpStatus.NOT_FOUND);
};
export const UserServices = {
  signUpUserIntoDB,
  loginUser,
};
