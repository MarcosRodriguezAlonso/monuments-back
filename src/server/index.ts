import "dotenv/config";
import chalk from "chalk";
import express from "express";
import PingController from "../server/PingController/PingController.js";
import { notFoundError } from "./errors/middlewares/errorMiddlewares.js";
import { generalError } from "./errors/middlewares/errorMiddlewares.js";

export const app = express();

const port = process.env.PORT ?? 5000;

app.listen(5000, () => {
  console.log(`Listening on ${chalk.blue.bold(`http://localhost:${port}`)}`);
});

const pingController = new PingController();

app.get("/", pingController.getPong);

app.use(notFoundError);

app.use(generalError);
