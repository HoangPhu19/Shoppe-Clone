import axios from "axios";
export { API_AUTH } from "../../views/auth/services/api";
import { accessToken } from "../../services/utils";

export const AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    // "Content-Type": "application/json",
  },
});

// Add a request interceptor
AxiosInstance.interceptors.request.use(
  (request) => {
    // Do something before request is sent
    if (accessToken.value) {
      request.headers.Authorization = accessToken.value;
    }

    return request;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
AxiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
