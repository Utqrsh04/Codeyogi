import { Group } from "../models/Group";

export const GROUP_QUERY = "groups/query";
export const GROUP_QUERY_COMPLETED = "groups/query_completed";

export const QueryAction = (groupQuery: string) => ({ type: GROUP_QUERY, payload: groupQuery })

export const QueryCompleted = (groupQuery: string , groups : Group[]) => ({ type: GROUP_QUERY_COMPLETED, payload: {groupQuery , groups} })
