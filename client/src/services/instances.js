import axios from "axios";
import { requestInterceptor, responseInterceptor } from "./interceptors";

const mainInstance = axios.create({
  baseURL: import.meta.env.VITE_EXPRESS_API_URL + "/api/main",
  headers: {
    "Content-Type": "application/json",
  },
});
mainInstance.interceptors.request.use(requestInterceptor);
mainInstance.interceptors.response.use(responseInterceptor);

const authInstance = axios.create({
  baseURL: import.meta.env.VITE_EXPRESS_API_URL + "/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});
authInstance.interceptors.request.use(requestInterceptor);
authInstance.interceptors.response.use(responseInterceptor);

const userInstance = axios.create({
  baseURL: import.meta.env.VITE_EXPRESS_API_URL + "/api/user",
  headers: {
    "Content-Type": "application/json",
  },
});
userInstance.interceptors.request.use(requestInterceptor);
userInstance.interceptors.response.use(responseInterceptor);

export { mainInstance, authInstance, userInstance };
