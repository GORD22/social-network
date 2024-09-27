import express, { Express, NextFunction, Request, Response } from "express";
import posts from "./posts/posts.routes";
import dotenv from "dotenv";
import cors from "cors";
const app: Express = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.use(cors({ credentials: true }));
app.use(express.json());
app.use("/posts", posts);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
