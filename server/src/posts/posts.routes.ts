import express, { Request, Response } from "express";
import postsController from "./posts.controllers";
import { IPost } from "./posts.types";
const router = express.Router();

router.get("/", postsController.get);

export default router;
