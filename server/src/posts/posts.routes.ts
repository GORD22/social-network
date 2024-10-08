import { Router } from "express";
import postsController from "./posts.controllers";
import { QueryRequest } from "../types";
const postsRouter = Router();

postsRouter.get("/", postsController.get);

export default postsRouter;
