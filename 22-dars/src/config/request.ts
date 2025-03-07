import axios from "axios";
import Cookie from "js-cookie";

const request = axios.create({
  baseURL: "http://localhost:4000/api/v1",
});

request.interceptors.request.use((config) => {
  const token = Cookie.get("user_token");
  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
});

export { request };
