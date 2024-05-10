import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";

export const notFoundError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const error = new Error();
  next(error);
};

export const generalError = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  res.status(500).json(error.message);
  console.log(error);
};
