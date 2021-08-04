import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from "./action.constants"

export const QueryAction = (query: string) => ({ type: GROUP_QUERY, payload: query })

export const QueryCompleted = (query: string, groups: Group[]) => ({ type: GROUP_QUERY_COMPLETED, payload: { query, groups } })



export const groupActions = bindActionCreators({
  query: QueryAction,
  queryCompleted: QueryCompleted
}, store.dispatch);