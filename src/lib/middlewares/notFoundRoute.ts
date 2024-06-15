/* eslint-disable */

import { NextFunction, Request, Response } from "express";

export const handleNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url = `http://localhost:5000${req.originalUrl}`;
  // console.log(req);
  res.status(404).json({ message: "Not Found", url });
};
