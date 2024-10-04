import { Request, Response } from "express";
import { pool } from "../config/db";
import { CODES } from "../codes";

export const usersController = {
  get: async (req: Request, res: Response) => {
    try {
      const result = await pool.query("SELECT * FROM users");
      res.status(CODES.OK).json(result.rows);
    } catch (err: any) {
      res.status(CODES.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  },
  post: async (req: Request, res: Response) => {
    try {
      const result = await pool.query("SELECT * FROM users");
      res.status(CODES.OK).json(result.rows);
    } catch (err: any) {
      res.status(CODES.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  },
};
