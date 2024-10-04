import express, { Response } from "express";
import postsController from "./posts.controllers";
import { QueryRequest } from "../types";
const postsRouter = express.Router();

postsRouter.get("/", (req: QueryRequest<void>, res: Response) => {
  return postsController.get(req, res)
});

export default postsRouter;
