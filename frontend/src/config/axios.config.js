import axios from "axios";

const crmApi = axios.create({
  baseURL: "http://localhost:9001/v1/api/",
});

export default crmApi;
