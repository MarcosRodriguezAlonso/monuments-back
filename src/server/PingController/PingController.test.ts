import PingController from "./PingController";
import { type Request, type Response } from "express";

describe("Given the 1 ping controller", () => {
  describe("When it recibes a response", () => {
    const pingController = new PingController();

    test("Then it should call the response's json method with 'pong' message", () => {
      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      pingController.getPong(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ message: "pong" });
    });

    test("When it should call the response's status method with 200", () => {
      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      pingController.getPong(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
