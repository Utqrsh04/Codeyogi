import axios from "axios";
import { User } from "../models/User";
import { BASE_URL, get } from "./base";

interface UsersResponse {
  data: User[];
}

export const fetchUsersApi = () => {

  const url = BASE_URL + "/people";
  console.log("FetchUserApi Called");
  
  return get<UsersResponse>(url)
  // .then((response) => response.data.data)
  // .catch((e) => console.error(e))
}


export const fetchOneUserApi = (id: string) => {

  const url = BASE_URL + "/people/" + id;

  return axios.get<UsersResponse>(url)
  // .then((response) => response.data.data)
  // .catch((e) => console.error(e))
}
