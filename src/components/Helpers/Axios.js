import axios from "axios";
const baseURL = process.env.TechFixAPI;
const TechFixAPI = axios.create({
  baseURL: baseURL,
  Header: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "content-Type": "application/json; charset=UTF-8",
  },
  Credentials: true,
});

export default TechFixAPI;
