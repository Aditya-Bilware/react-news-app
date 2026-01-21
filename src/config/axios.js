import axios from "axios";

const api = axios.create({
  baseURL: "https://news-backend-c8b7.onrender.com/",
  // timeout: 4000, //ms
});

export default api;
