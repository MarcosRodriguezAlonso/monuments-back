import { type Request, type Response } from "express";
import type PingControllerStructure from "./types";

class PingController implements PingControllerStructure {
  public getPong(_req: Request, res: Response) {
    res.status(200).json({ message: "podsng" });
  }
}

export default PingController;
