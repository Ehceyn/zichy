import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://zichygraphs.herokuapp.com/api",
});
