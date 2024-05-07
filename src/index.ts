import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";

export const app = express();

app.listen(5000, () => {
  console.log("Listening on port 5000");
});

app.get("/", (_req, res, _next) => {
  res.status(200).json({ message: "pong" });
});

app.use((_req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
  const error = new Error("Ausilio");
  console.log(error);
  next(error);
});

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json(error.message);
});
