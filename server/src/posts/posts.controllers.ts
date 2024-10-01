import { pool } from "../config/db";
import { Request, Response } from "express";

const postsController = {
  get: async (req: Request, res: Response) => {
    try {
      const result = await pool.query("SELECT * FROM posts");
      res.status(200).json(result.rows);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
};

export default postsController;
