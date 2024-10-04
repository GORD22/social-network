import { CODES } from "../codes";
import { pool } from "../config/db";
import { handleError } from "../lib/handle-error";
import { BodyResponse, QueryRequest, TError } from "../types";
import { IPost } from "./posts.types";

const postsController = {
  get: async (req: QueryRequest<void>, res: BodyResponse<IPost[] | TError>) => {
    try {
      const result = await pool.query("SELECT * FROM posts");
      return res.status(CODES.OK).json(result.rows);
    } catch (err) {
      res.status(CODES.INTERNAL_SERVER_ERROR).json(handleError(err));
    }
  },
};

export default postsController;
