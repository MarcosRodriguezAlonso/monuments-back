import { notFoundError } from "../errorMiddlewares.js";
import { type Request, type Response } from "express";

describe("Given the middleware notFoundError", () => {
  describe("When it receives a response", () => {
    test("Then it should call the response's next method", () => {
      const req = {};
      const res = {};
      const next = jest.fn();

      notFoundError(req as Request, res as Response, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
