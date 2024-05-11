import { type NextFunction, type Request, type Response } from "express";
import type ServerError from "../../../ServerError/ServerError.js";
import { generalError } from "../errorMiddlewares.js";

describe("Given the generalError function", () => {
  describe("When it receives an error and a response", () => {
    test("Then it should call the response's status method with a 123", () => {
      const error: Pick<ServerError, "message" | "statusCode"> = {
        message: "Internal server error",
        statusCode: 123,
      };
      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      generalError(
        error as ServerError,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(error.statusCode);
    });
  });
});
