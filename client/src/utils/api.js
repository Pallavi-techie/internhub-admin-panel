import axios from "axios";

const api = axios.create({
  baseURL: "https://internhub-admin-panel.onrender.com/api",
  withCredentials: true, // 🔥 REQUIRED for cookie auth
});

export default api;
