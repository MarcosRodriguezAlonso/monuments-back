import { type Request, type Response, type NextFunction } from "express";
import ServerError from "../../ServerError/ServerError.js";

export const notFoundError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const error = new ServerError("Not found", 404);
  next(error);
};

export const generalError = (
  error: ServerError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  res.status(error.statusCode).json(error.message);
  console.log(error);
};
