import { Request } from "express";

export type TErrorReturnType = {
  statusCode: number;
  message: string;
  errorSources: TErrorSouce[];
};

export type TErrorSouce = {
  path: string | number;
  message: string;
};
export interface CustomRequest extends Request {
  user?: string;
}
