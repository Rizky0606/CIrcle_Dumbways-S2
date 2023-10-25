import axios from "axios";

export const API = axios.create({
  //   baseURL: "http://localhost:5000/api/v1",
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});
