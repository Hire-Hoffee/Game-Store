import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_EXPRESS_API_URL + "/api/main",
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
