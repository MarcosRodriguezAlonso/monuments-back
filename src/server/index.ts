import "dotenv/config";
import chalk from "chalk";
import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import PingController from "../server/PingController/PingController.js";

export const app = express();

const port = process.env.PORT ?? 5000;

app.listen(5000, () => {
  console.log(`Listening on ${chalk.blue.bold(`http://localhost:${port}`)}`);
});

const pingController = new PingController();

app.get("/", pingController.getPong);

app.use((_req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
  const error = new Error("not found");
  next(error);
});

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json(error.message);
  console.log(error);
});
