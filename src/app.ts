import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./lib/middlewares/globalErrorHandelers";
import { handleNotFound } from "./lib/middlewares/notFoundRoute";
// mongodb://localhost:27017/assingment-03
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Car Wash Booking System Server Running................");
});

app.use(handleNotFound);
app.use(globalErrorHandler);
export default app;
