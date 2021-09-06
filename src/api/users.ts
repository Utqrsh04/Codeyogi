import axios from "axios";
import { UpdateUserParams, User } from "../models/User";
import { BASE_URL } from "./base";


export interface UsersRequest {
  limit?: number;
  offset?: number;
}

interface UsersResponse {
  data: User[];
}

interface UserResponse {
  data: User;
}

export const getMeApi = () => {
  const url = BASE_URL + "/me";
  return axios.get<UserResponse>(url).then((response) => response.data.data);
};


export const fetchUserListApi = (data: UsersRequest) => {
  const url = BASE_URL + "/people";
  return axios
    .get<UsersResponse>(url, { params: data })
    .then((response) => response.data.data);
};

export const fetchUserByIdApi = (id: number) => {
  const url = BASE_URL + "/people/" + id;
  return axios.get<UserResponse>(url).then((response) => response.data.data);
};


export const updateUserApi = (data: User) => {
  const url = BASE_URL + "/me";
  return axios
    .put<UserResponse>(url, data)
    .then((response) => response.data.data);
};