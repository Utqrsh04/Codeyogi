import axios from "axios";
import { User } from "../models/User";
import { BASE_URL, LS_AUTH_TOKEN } from "./base";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    is_2fa_enabled: boolean;
  }
  token: string;
  user: User;
}

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";
  // console.log("Login ",data);

  return axios.post<LoginResponse>(url, data).then((response) => {
    // console.log("Response and Token ", response.data);
    localStorage.setItem(LS_AUTH_TOKEN, response.data.token)
    return response.data.user;
  });
};

export const Logout = () => {
  localStorage.removeItem(LS_AUTH_TOKEN);
}


interface meResponse {
  data: User;
}

export const me = () => {
  const url = BASE_URL + "/me";
  return axios.get<meResponse>(url).then((response) => {
    // console.log("Auth me ",response.data);
    return response.data.data
  }
  )
}

export const updateMe = (data: any) => {
  const url = BASE_URL + "/me";
  return axios.put(url, { ...data }).then((response) => response.data.data);
}