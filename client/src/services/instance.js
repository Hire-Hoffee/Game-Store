import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:7070/api",
});

export default instance;
