import axios from "axios";

const request1 = axios.create({
  baseURL: "/api1",
  timeout: 500000
});

const request2 = axios.create({
  baseURL: "/api2",
  timeout: 500000
});

export {request1, request2}
