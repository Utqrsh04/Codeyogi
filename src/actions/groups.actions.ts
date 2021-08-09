import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { GROUP_DATA_BY_ID, GROUP_QUERY, GROUP_QUERY_COMPLETED } from "./action.constants"

export const QueryAction = (query: string) => ({ type: GROUP_QUERY, payload: query })

export const QueryCompleted = (query: string, groups: Group[]) => ({ type: GROUP_QUERY_COMPLETED, payload: { query, groups } })

export const GroupDataById = (id: number) => ({ type: GROUP_DATA_BY_ID, payload: { id } })

export const groupActions = bindActionCreators({
  query: QueryAction,
  queryCompleted: QueryCompleted, GroupDataById
}, store.dispatch);