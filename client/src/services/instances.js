import axios from "axios";
import { requestInterceptor, responseInterceptor, errorInterceptor } from "./interceptors";

const mainInstance = axios.create({
  baseURL: import.meta.env.VITE_EXPRESS_API_URL + "/api/main",
  headers: {
    "Content-Type": "application/json",
  },
});
mainInstance.interceptors.request.use(requestInterceptor, errorInterceptor);
mainInstance.interceptors.response.use(responseInterceptor, errorInterceptor);

const authInstance = axios.create({
  baseURL: import.meta.env.VITE_EXPRESS_API_URL + "/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});
authInstance.interceptors.request.use(requestInterceptor, errorInterceptor);
authInstance.interceptors.response.use(responseInterceptor, errorInterceptor);

const userInstance = axios.create({
  baseURL: import.meta.env.VITE_EXPRESS_API_URL + "/api/user",
  headers: {
    "Content-Type": "application/json",
  },
});
userInstance.interceptors.request.use(requestInterceptor, errorInterceptor);
userInstance.interceptors.response.use(responseInterceptor, errorInterceptor);

export { mainInstance, authInstance, userInstance };
