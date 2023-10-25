import axios from "axios";

const baseUrl = 'https://api2.myauto.ge/ka'

const Api = axios.create({
  baseURL: baseUrl,
  timeout: 50 * 1000
});

Api.interceptors.request.use(async (req) => {
  //@ts-ignore
  req.headers = {
      ...req.headers,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
  }
  return req;
})

Api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);


export default Api;