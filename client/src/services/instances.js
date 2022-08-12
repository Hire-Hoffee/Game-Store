import axios from "axios";
import { reqIntercept, resIntercept } from "./interceptors";

const mainInstance = axios.create({
  baseURL: import.meta.env.VITE_EXPRESS_API_URL + "/api/main",
  headers: {
    "Content-Type": "application/json",
  },
});
mainInstance.interceptors.request.use(reqIntercept);
mainInstance.interceptors.response.use(resIntercept);

const authInstance = axios.create({
  baseURL: import.meta.env.VITE_EXPRESS_API_URL + "/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});
authInstance.interceptors.request.use(reqIntercept);
authInstance.interceptors.response.use(resIntercept);

export { mainInstance, authInstance };
