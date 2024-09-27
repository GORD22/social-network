import { Pool } from "pg";
import mysql from 'mysql2'
require("dotenv").config();

export const pool = mysql.createPool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
}).promise();
