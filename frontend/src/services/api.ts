import axios from "axios";
import { getToken } from "./authentication";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:3001",
});

api.interceptors.request.use(async (config: any) => {
  const token = getToken();

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export { api };
