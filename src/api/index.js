import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

api.interceptors.request.use((config) => {
  const auth = JSON.parse(localStorage.getItem("authData"));
  config.headers.Authorization = `Bearer ${auth?.token}`;
  return config;
});

export default api;
