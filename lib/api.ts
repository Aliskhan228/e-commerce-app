import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://e0617054a1501794.mokky.dev/",
});

export default instance;
