import { Request, Response } from "express";
import { pool } from "../config/db";
import { CODES } from "../codes";
import { BodyRequest, BodyResponse, QueryRequest } from "../types";
import { IUser } from "./users.types";
import { handleError } from "../lib/handle-error";
import { IUserCreate } from "./users.dto";

export const usersController = {
  get: async (req: QueryRequest, res: BodyResponse<IUser[]>) => {
    try {
      const result = await pool.query("SELECT * FROM users");
      res.status(CODES.OK).send({ users: result.rows });
    } catch (err: any) {
      res.status(CODES.INTERNAL_SERVER_ERROR).json(handleError(err));
    }
  },
  post: async (req: BodyRequest<IUserCreate>, res: BodyResponse<number>) => {
    try {
      const result = await pool.query(`INSERT INTO users (${Object.keys(req.body).join(', ')})
      VALUES (${Object.keys(req.body).map((_key, index) => `$${index + 1}`)}) RETURNING id`, Object.values(req.body));
      res.status(CODES.OK).send({ id: result.rows[0].id });
    } catch (err: any) {
      res.status(CODES.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  },
};
