import { Response } from "express";
import { CODES } from "../codes";
import { pool } from "../config/db";
import { handleError } from "../lib/handle-error";
import { BodyResponse, QueryRequest } from "../types";
import { IPost } from "./posts.types";

const postsController = {
  get: async (_req: QueryRequest, res: BodyResponse<IPost[]>) => {
    try {
      const result = await pool.query("SELECT * FROM posts");
      return res.status(CODES.OK).json({posts: result.rows});
    } catch (err) {
      res.status(CODES.INTERNAL_SERVER_ERROR).json(handleError(err));
    }
  },
};

export default postsController;
