import axios from "axios";

const restAPI = axios.create({
  baseURL: "http://localhost:7070/api",
});

export default restAPI;
