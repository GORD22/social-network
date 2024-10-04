import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  user:
    process.env.MODE === "development"
      ? process.env.DB_DEV_USER
      : process.env.DB_PROD_USER,
  host:
    process.env.MODE === "development"
      ? process.env.DB_DEV_HOST
      : process.env.DB_PROD_HOST,
  database:
    process.env.MODE === "development"
      ? process.env.DB_DEV_NAME
      : process.env.DB_PROD_NAME,
  password:
    process.env.MODE === "development"
      ? process.env.DB_DEV_PASSWORD
      : process.env.DB_PROD_PASSWORD,
  port: Number(process.env.DB_PORT),
});
