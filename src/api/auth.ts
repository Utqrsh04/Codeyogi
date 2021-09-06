import axios from "axios";
import { User } from "../models/User";
import { BASE_URL, LS_AUTH_TOKEN } from "./base";

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {};
  token: string;
  user: User;
}

export const loginAPI = (data: LoginData) => {
  console.log( " Login Api  " ,data);

  const url = BASE_URL + "/login";
  return axios.post<LoginResponse>(url, data).then((response) => {
    localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
    return response.data.user;
  });
};

export const logout = () => {
  localStorage.removeItem(LS_AUTH_TOKEN);
};
