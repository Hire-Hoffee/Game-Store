import axios from "axios";

const mainInstance = axios.create({
  baseURL: import.meta.env.VITE_EXPRESS_API_URL + "/api/main",
  headers: {
    "Content-Type": "application/json",
  },
});

const authInstance = axios.create({
  baseURL: import.meta.env.VITE_EXPRESS_API_URL + "/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export { mainInstance, authInstance };
