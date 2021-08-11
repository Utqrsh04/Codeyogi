import axios from "axios";
import { Group } from "../models/Group";
import { BASE_URL } from "./base";

export interface GroupRequest {
  limit?: number;
  offset?: number;
  query: string;
  status: "all-groups" | "favourite" | "archived";
}


interface GroupsResponse {
  data: Group[];
}

export interface EachGroupResponse {
  data: Group;
}


export const fetchGroups = (data: GroupRequest) => {

  const url = BASE_URL + "/groups";

  return axios.get<GroupsResponse>(url, { params: data })
    .then((response) => {
      // console.log("API ",response.data.data)
      return response.data.data;
    }
    ).catch((e) => console.error(e))
}

export const fetchGroupData = (id: number) => {

  const url = BASE_URL + `/groups/${id}`;

  return axios.get<EachGroupResponse>(url)
    .then((response) => {
      // console.log("API ",response.data.data)
      return response.data.data;
    }
    ).catch((e) => console.error(e))
}
