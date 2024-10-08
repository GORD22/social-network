import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import usersRouter from "./users/users.routes";
import postsRouter from "./posts/posts.routes";


const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.use(cors({ credentials: true }));
app.use(express.json());

app.use("/posts", postsRouter);
app.use("/users", usersRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
