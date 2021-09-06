import axios, { AxiosRequestConfig } from "axios";
import { CANCEL } from "redux-saga";

export const LS_AUTH_TOKEN = "login_token";
export const BASE_URL = "https://api-dev.domecompass.com";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  if (!token) {
    return config;
  }
  return { ...config, headers: { ...config.headers, Authorization: token } };
});

axios.interceptors.response.use(undefined, (error) => {
  if (error.response?.data?.code === 401) {
    console.error("Not Found");
    window.location.href = "/not-found";
  }

  if (error.response?.data?.code === 9101) {
    console.error("Invalid Token");
    localStorage.removeItem(LS_AUTH_TOKEN);
    window.location.href = "/login";
  }
  return Promise.reject(error);
});

export const get = <T>(url: string, config?: AxiosRequestConfig) => {
  const source = axios.CancelToken.source();

  const response = axios.get<T>(url, { ...config, cancelToken: source.token });
  response[CANCEL] = source.cancel;

  return response;
};
