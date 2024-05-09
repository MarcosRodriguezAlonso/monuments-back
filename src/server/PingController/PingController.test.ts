import PingController from "./PingController";
import { json, type Request, type Response } from "express";

describe("Given the 1 ping controller", () => {
  describe("When it recibes a response", () => {
    test("Then it should call the response's json method with 'pong' message", () => {
      const pingController = new PingController();
      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      pingController.getPong(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ message: "pong" });
    });
  });
});
