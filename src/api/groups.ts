import axios, { CancelToken } from "axios";
import { Group } from "../models/Group";
import { BASE_URL, get } from "./base";

export interface GroupsResponse {
  data: Group[];
}

export interface GroupResponse {
  data: Group;
}

export interface GroupsRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourite" | "archieved";
}

export const fetchGroupsApi = (data: GroupsRequest, token?: CancelToken) => {
  const url = BASE_URL + "/groups";

  return get<GroupsResponse>(url, { params: data, cancelToken: token });
};

export const fetchOneGroupApi = (id: number) => {
  const url = BASE_URL + "/groups/" + id;

  return axios.get<GroupResponse>(url).then((response) => response.data.data);
};
