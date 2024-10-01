import express from "express";
import postsController from "./posts.controllers";
const router = express.Router();

router.get("/", postsController.get);

export default router;
