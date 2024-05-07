import { type NextFunction, type Response, type Request } from "express";

interface PingControllerStructure {
  getPong: (_req: Request, res: Response, next: NextFunction) => void;
}

export default PingControllerStructure;
