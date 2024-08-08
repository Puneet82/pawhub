import axios from "axios";

const url = "http://localhost:5050";
const API = axios.create({ baseURL: url });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile"))?.data?.token}`;
  }

  return req;
});

export default API;
