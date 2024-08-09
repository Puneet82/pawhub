import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5050";
const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
  if (typeof window !== "undefined") {
    const profile = localStorage.getItem("profile");
    if (profile) {
      req.headers.Authorization = `Bearer ${JSON.parse(profile)?.data?.token}`;
    }
  }
  return req;
});

export default API;

