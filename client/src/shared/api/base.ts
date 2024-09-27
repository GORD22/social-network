import axios from "axios";
import { getApiUrl } from "../config/lib/get-api-url";

export const BASE_URL = getApiUrl(process.env.MODE);

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});
