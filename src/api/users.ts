import axios from "axios";
import { BASE_URL, get } from "./base";


export interface UserRequest {
  limit?: number;
  offset?: number;
  query: string;
  status: "all-groups" | "favourite" | "archived";
}

// export const fetchUsers = (data: UserRequest ) => {

//   const url = BASE_URL + "/people";

//   return get(url, { params: data })
//     .then((response) =>  console.log(response)
//     )
//     // .catch((e) => console.error(e))
// }


export const fetchOneUser = (id: string) => {

  const url = BASE_URL + "/people/"+id;

  return axios.get(url)
    .then((response) =>  response.data.data)
    // .catch((e) => console.error(e))
}
